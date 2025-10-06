import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaClock, FaTag, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogModal = ({ isOpen, onClose, post, onPrevious, onNext, hasPrevious, hasNext }) => {
    if (!post) return null;

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="relative h-64 bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center">
                            <div className="text-center px-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {post.title}
                                </h2>
                                <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt />
                                        {new Date(post.date).toLocaleDateString()}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaClock />
                                        {post.readTime}
                                    </span>
                                    <span className="bg-white/20 px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                                <FaTimes className="text-white text-xl" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 overflow-y-auto">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full"
                                    >
                                        <FaTag />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-gray dark:prose-invert max-w-none page-scrollbar">
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                    {post.content}
                                </div>
                            </div>

                            {/* Footer with Navigation */}
                            <div className="border-t border-gray-200 dark:border-gray-700 mt-10 p-4">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={onPrevious}
                                        disabled={!hasPrevious}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${hasPrevious
                                            ? "bg-teal-600 text-white hover:bg-teal-700"
                                            : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                            }`}
                                    >
                                        <FaArrowLeft />
                                        Previous
                                    </button>

                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {post.category} • {post.readTime}
                                    </div>

                                    <button
                                        onClick={onNext}
                                        disabled={!hasNext}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${hasNext
                                            ? "bg-teal-600 text-white hover:bg-teal-700"
                                            : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                            }`}
                                    >
                                        Next
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BlogModal;
