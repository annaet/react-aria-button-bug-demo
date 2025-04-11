import { useEffect, useState, useRef } from "react";
import { Button } from "react-aria-components";

export function Menu({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const onPress = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const closeMenu = (e: MouseEvent) => {
        if (!ref.current?.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("pointerdown", closeMenu);
      return () => document.removeEventListener("pointerdown", closeMenu);
    }
  });

  return (
    <div ref={ref}>
      <Button onPress={onPress}>{text}</Button>
      {isOpen && <p style={{ border: '1px solid red' }}>Menu {text} is open!</p>}
    </div>
  );
}
