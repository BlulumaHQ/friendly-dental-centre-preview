import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loaderLogo from "@/assets/loader-logo.svg";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2000);

    const handleLoad = () => {
      setTimeout(() => setVisible(false), 400);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <motion.img
            src={loaderLogo}
            alt="Friendly Dental Centre"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-64 md:w-80"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
