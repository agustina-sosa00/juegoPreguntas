import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface IPropsModal {
  close?: () => void;
  title?: string;
  children: React.ReactNode;
  modalWidth?: string;
  buttonClose?: boolean;
  bgColor?: string;
}

export const Modal: React.FC<IPropsModal> = ({
  close,
  title,
  children,
  buttonClose,
}) => {
  function handleClose() {
    close?.();
  }

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && close) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "BUTTON" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      target.closest(".no-drag")
    ) {
      return;
    }

    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        className={`flex flex-col items-center  p-6 bg-white rounded shadow-xl w-full h-screen`}
      >
        {buttonClose && (
          <div className="flex items-start justify-between w-full h-10 ">
            {title && (
              <h3 className="mb-6 text-2xl font-semibold text-center text-secondary">
                {title}
              </h3>
            )}
            <button
              onClick={handleClose}
              className="text-2xl font-bold text-primaryGreen hover:text-primaryGreen/80"
            >
              <IoCloseSharp />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
