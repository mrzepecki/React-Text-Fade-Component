import { motion } from "framer-motion";
import styles from "./TextFade.module.scss";

export default function TextFade({ children }) {
    if (!children) {
        return <span></span>;
    }

    const characterAnimation = {
        hidden: {
            opacity: 1,
            y: 80
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const textTransition = {
        delayChildren: 0.8,
        staggerChildren: 0.06
    };

    return (
        <motion.span
            className={styles.TextFade__text}
            initial="hidden"
            animate="visible"
            transition={textTransition}
        >
            {children.split(" ").map((item, index) => (
                <span key={index} className={styles.TextFade__word}>
          <motion.span
              variants={characterAnimation}
              className={styles.TextFade__character}
          >
            {item}
          </motion.span>
        </span>
            ))}
        </motion.span>
    );
}
