"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className = "", ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card ${customClass ?? ""} ${className}`.trim()}
    />
  )
);
Card.displayName = "Card";

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement | null, slot: Slot, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  className = "",
  style = {},
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    );

    const swap = () => {
      if (order.current.length < 2 || document.hidden) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      if (!elFront) return;

      // Kill any previous timeline if still active
      tlRef.current?.kill();

      const tl = gsap.timeline({
        defaults: { force3D: true },
      });
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
        force3D: true,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
            force3D: true,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          if (elFront) gsap.set(elFront, { zIndex: backSlot.zIndex, force3D: true });
        },
        undefined,
        "return"
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
          force3D: true,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        tlRef.current?.pause();
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        tlRef.current?.play();
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(swap, delay);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });

    if (pauseOnHover) {
      const node = container.current;
      if (node) {
        const pause = () => {
          tlRef.current?.pause();
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener("mouseenter", pause, { passive: true });
        node.addEventListener("mouseleave", resume, { passive: true });
        return () => {
          node.removeEventListener("mouseenter", pause);
          node.removeEventListener("mouseleave", resume);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
          tlRef.current?.kill();
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      tlRef.current?.kill();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement<React.HTMLAttributes<HTMLDivElement>>(child)) {
      return child;
    }

    return cloneElement(child, {
      key: i,
      // @ts-expect-error - ref attached dynamically to card
      ref: refs[i],
      style: { width, height, ...(child.props.style ?? {}) },
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        child.props.onClick?.(e);
        onCardClick?.(i);
      },
    });
  });

  return (
    <div
      ref={container}
      className={`card-swap-container ${className}`.trim()}
      style={{ width, height, ...style }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
