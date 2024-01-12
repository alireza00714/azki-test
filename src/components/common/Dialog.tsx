import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Dialog = (props: IProps) => {
  const { isOpen, setIsOpen, children } = props;
  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed flex left-0 top-0 right-0 bottom-0 w-screen h-full overflow-hidden bg-[#0000004f] items-center justify-center p-5 z-[39] lg:z-[53]"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 100 }}
            className="bg-white p-5 pb-14 z-40 lg:z-[55] fixed right-0 left-0 bottom-[-2rem] lg:top-0 lg:w-[50%] lg:max-h-fit lg:m-auto lg:rounded-2xl rounded-t-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")!
  );
};

export default Dialog;
