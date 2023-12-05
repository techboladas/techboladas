import { MouseEventHandler, useState } from "react";

export const useMenu = () => {
  const MENU_OPEN_CONTENT_DISPLAY = "flex";
  const MENU_CLOSE_CONTENT_DISPLAY = "hidden";
  const MENU_OPEN_WIDTH = "w-1/3";
  const MENU_CLOSE_WIDTH = "w-20";
  const MENU_OPEN_GRID = "grid-cols-3";
  const MENU_CLOSE_GRID = "grid-cols-1";

  const [isOpen, setOpen] = useState(true);
  const [contentDisplay, setContentDisplay] = useState(
    MENU_CLOSE_CONTENT_DISPLAY,
  );
  const [width, setWidth] = useState(MENU_CLOSE_WIDTH);
  const [grid, setGrid] = useState(MENU_CLOSE_GRID);
  const close = () => {
    setContentDisplay(MENU_CLOSE_CONTENT_DISPLAY);
    setWidth(MENU_CLOSE_WIDTH);
    setGrid(MENU_CLOSE_GRID);
    setOpen(false);
  };

  const open = () => {
    setContentDisplay(MENU_OPEN_CONTENT_DISPLAY);
    setWidth(MENU_OPEN_WIDTH);
    setGrid(MENU_OPEN_GRID);
    setOpen(true);
  };

  const handleClick: MouseEventHandler<HTMLLIElement> = (e: MouseEvent) => {
    if (isOpen) {
      close();
      return;
    }

    open();
  };

  return { handleClick, contentDisplay, width, grid };
};
