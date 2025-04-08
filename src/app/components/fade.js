import { motion } from "framer-motion";

const FadeInOnScroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="row-span-1 bg-blue-500 text-white p-6 rounded-lg shadow-lg"
    >
      This fades in when you scroll to it!
    </motion.div>
  );
};

export default FadeInOnScroll;