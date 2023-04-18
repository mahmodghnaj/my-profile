import {
  ComponentProps,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";

interface DialogProps extends ComponentProps<"div"> {
  open: boolean;
  handler: Dispatch<SetStateAction<void>>;
  children: ReactNode;
}

const Dialog = ({ open, handler, children }: DialogProps) => {
  const stopEvent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "20px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [open]);
  return (
    <>
      {open && (
        <div
          onClick={() => handler()}
          className="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-[1px]"
          style={{
            zIndex: 9999,
          }}
        >
          <div
            onClick={(event) => stopEvent(event)}
            className="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-san text-base font-light leading-relaxed overflow-hidden"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Dialog;
