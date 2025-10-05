import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight, FaSearch } from "react-icons/fa";
import { blogPosts, categories } from "../constants/blogPosts";
import BlogModal from "../components/BlogModal";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    const handlePreviousPost = () => {
        const currentIndex = filteredPosts.findIndex(post => post.id === selectedPost.id);
        if (currentIndex > 0) {
            setSelectedPost(filteredPosts[currentIndex - 1]);
        }
    };

    const handleNextPost = () => {
        const currentIndex = filteredPosts.findIndex(post => post.id === selectedPost.id);
        if (currentIndex < filteredPosts.length - 1) {
            setSelectedPost(filteredPosts[currentIndex + 1]);
        }
    };

    const getCurrentPostIndex = () => {
        return filteredPosts.findIndex(post => post.id === selectedPost?.id);
    };

    return (
        <section id="blog" className="min-h-screen py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
                        Blockchain Blogs
                    </h2>
                    <p className="text-center mb-10 dark:text-gray-400 px-4">
                        Insights, tutorials, and analysis on blockchain technology, DeFi, NFTs, and Web3 development
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? "bg-teal-600 text-white"
                                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* All Posts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="relative pb-2 rounded-lg border dark:border-gray-800 shadow-md group cursor-pointer max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300"
                                onClick={() => handlePostClick(post)}
                            >
                                <div className="h-40 rounded-t-lg bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold text-center px-4">{post.title}</span>
                                </div>
                                <div className="py-4 px-3">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt />
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaClock />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded-full text-xs">
                                            {post.category}
                                        </span>
                                        <button className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
                                            Read More
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                                No articles found matching your criteria.
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Blog Modal */}
            <BlogModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                post={selectedPost}
                onPrevious={handlePreviousPost}
                onNext={handleNextPost}
                hasPrevious={getCurrentPostIndex() > 0}
                hasNext={getCurrentPostIndex() < filteredPosts.length - 1}
            />
        </section>
    );
};

export default Blog;
