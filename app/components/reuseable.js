'use client'

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaComment, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';


export function PostList({ posts }) {

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Existing Posts</h2>
            <ul>
                {posts.map((post) => (
                <li key={post.id} className="mb-4">
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-gray-600">{post.content}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export function PostForm({ onSubmit }) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg">
        <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
        <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
            </label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full px-3 py-2"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
            </label>
            <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="border rounded w-full px-3 py-2"
            required
            ></textarea>
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition duration-300">
            Create Post
        </button>
        </form>
    );
}

export function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
        <div className="flex w-full min-h-screen">
            {/* Sidebar/Navigation */}
            <aside
                className={`bg-gray-800 fixed text-white w-64 min-h-screen p-4 transition-transform transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:block`}
            >
                {/* Responsive Sidebar Button (Visible on smaller screens) */}
                <div className="md:hidden relative right-0 mb-2">
                    <button className="p-2" onClick={toggleSidebar}>
                        {/* Add an icon for the button, e.g., <Icon /> */}
                        {isSidebarOpen ? <FaX className="text-lg " /> : null}
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                <nav>
                    <Link href="/admin/posts" className="block py-2 px-4 hover:bg-gray-700">Posts</Link>
                    {/* Add more navigation links for other admin activities */}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:fixed left-64">
                {/* Responsive Sidebar Button (Visible on smaller screens) */}
                <div className="md:hidden">
                    <button className="p-2" onClick={toggleSidebar}>
                        {/* Add an icon for the button, e.g., <Icon /> */}
                        {isSidebarOpen ? null : 'Open Sidebar'}
                    </button>
                </div>
                {children}
            </main>
        </div>
    );
}

export function LocationMap() {
    // Replace the src attribute with your actual Google Maps Embed API link
    const googleMapsEmbedLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.0059731!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjpNMjMuMDA1LDc0LjAwOVoiLzIwMTgvMDUvMDkiLCJkb2ciOiJnb29nbGUiLCJnIjoicG9zdCJ9';

    return (
    <div className="mb-8">
        <iframe
        title="Location Map"
        src={googleMapsEmbedLink}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        ></iframe>
    </div>
    );
}

export function SocialMediaLinks() {
    // Replace these with your actual social media profiles
    const socialMediaProfiles = [
    { name: 'Facebook', link: 'https://www.facebook.com/example' },
    { name: 'Twitter', link: 'https://twitter.com/@spadeshub' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/example' },
    // Add more social media profiles as needed
    ];

    return (
    <div className="flex space-x-4 mb-8">
        {socialMediaProfiles.map((profile) => (
        <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
        >
            {profile.name}
        </a>
        ))}
    </div>
    );
}

export function ContactPageForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        });

        const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        };

        const handleContactForm = (e) => {
        e.preventDefault();
        // Replace this with your actual contact form submission logic
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        };

        return (
            <form onSubmit={handleContactForm} className="max-w-md mx-auto">
                <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border rounded w-full px-3 py-2"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border rounded w-full px-3 py-2"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="border rounded w-full px-3 py-2"
                    required
                ></textarea>
                </div>
                <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition duration-300"
                >
                Send Message
                </button>
            </form>
        );
}

export function ContactInfo() {
    const router = useRouter();

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-black/90">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                Have questions, suggestions or want to post your story? Reach out to us!
                </p>
                {/* Add your contact information here, such as email, phone, or a contact form */}
                <button onClick={() => router.push('/contact')} className="rounded-lg px-4 py-1 bg-accent text-white hover:bg-transparent hover:text-accent font-semibold">Contact Us</button>
            </div>
        </section>
    )
}

export function MissionVision() {
    
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Mission and Vision</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Our mission is to provide valuable and insightful content to our readers, fostering knowledge and inspiration.
                </p>
                <p className="text-lg text-gray-700">
                    Our vision is to become a trusted source of information, connecting with our audience and making a positive impact.
                </p>
            </div>
        </section>
      );
}

export function TeamMembers() {
    // Dummy data for team members
    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'Founder & CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Jane Smith', role: 'Content Writer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        // Add more team members as needed
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-accent">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-2 text-black">{member.name}</h3>
                        <p className="text-gray-700 mb-2 font-semibold">{member.role}</p>
                        <p className="text-secondary">{member.bio}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export function AboutIntro() {

    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">About Clarity Pulse</h2>
                <p className="text-lg text-gray-700 mb-8">Welcome to our blog! Discover the stories behind the scenes and get to know the people who make it happen.</p>
            </div>
        </section>
    )
}

export function HomeHero() {

    return (
        <section className="bg-primary text-accent py-20 rounded">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 animate-pulse">Welcome to Clarity Pulse</h1>
                <p className="text-lg mb-8 text-secondary">Explore insightful articles and stay updated with the latest trends.</p>
                {/* Add any additional elements or CTA buttons as needed */}
                <button className="rounded-full px-4 py-2 bg-accent text-white hover:bg-transparent hover:text-accent font-semibold transition duration-300 ease-linear outline-none focus:outline-none">Post your story</button>
            </div>
        </section>
    )
}

export function CommentsSection({ comments }) {
    // Dummy function for handling comment submission
    const handleCommentSubmit = (comment) => {
    // Replace this with your actual comment submission logic
    console.log('Comment submitted:', comment);
    };

    const [newComment, setNewComment] = React.useState('');

    const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    };

    const handleCommentButton = () => {
    if (newComment.trim() !== '') {
        handleCommentSubmit(newComment);
        setNewComment('');
    }
    };

    return (
        <div>
            <div className="mb-4 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Leave a Comment</h3>
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Type your comment here..."
                    className="border rounded w-full px-3 py-2 max-w-lg text-secondary"
                ></textarea>
                <button
                    onClick={handleCommentButton}
                    className="bg-primary text-accent hover:text-primary px-4 py-2 rounded mt-2 hover:bg-accent transition duration-300 w-fit"
                >
                    Submit Comment
                </button>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2">Comments</h3>
                {comments.map((comment, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-gray-600">{comment.author} said:</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BlogPostDetail({ post, relatedPosts }) {

    return (
        <div>
            <article className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-600 mb-4">Category: {post.category}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-base leading-7 text-gray-700" />
            </article>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Author Information</h2>
                <p className="text-gray-600">Written by {post.author} on {post.date}</p>
                {/* Add more author information if needed */}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-white p-4 rounded shadow">
                    <Link href={`/blog/post?id=${relatedPost.id}`} className="text-secondary hover:underline">{relatedPost.title}</Link>
                    <p className="text-gray-600">{relatedPost.category}</p>
                    </div>
                ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                {/* Add your comments section component here */}
                {/* Ensure it follows the color palette and styling guidelines */}
                <div className="flex items-center text-gray-600">
                    <FaComment className="mr-2" /> {post.commentsCount} Comments
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Share This Post</h2>
                <div className="flex space-x-4">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-primary hover:text-accent" />
                    </a>
                    <a href={`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl text-primary hover:text-accent" />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-primary hover:text-accent" />
                    </a>
                </div>
            </section>
        </div>
    )
}

export function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = () => {
    onSearch(searchTerm);
    };

    return (
        <div className="flex items-center mb-8">
            <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 mr-2 text-secondary"
            />
            <button
            onClick={handleSearch}
            className="bg-primary text-secondary px-4 py-2 rounded hover:bg-accent transition duration-300"
            >
            Search
            </button>
        </div>
    );
}

export function Pagination ({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    return (
        <div className="flex justify-center mt-8">
        {currentPage > 1 && (
            <button
            onClick={() => onPageChange(currentPage - 1)}
            className="mr-2 bg-primary text-secondary px-4 py-2 rounded hover:bg-accent hover:text-primary transition duration-300"
            >
            Previous
            </button>
        )}
        {pages.map((page) => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`mx-2 ${
                currentPage === page ? 'bg-primary text-secondary' : 'bg-white text-secondary'
            } px-4 py-2 rounded hover:bg-accent hover:text-primary transition duration-300`}
            >
            {page}
            </button>
        ))}
        {currentPage < totalPages && (
            <button
            onClick={() => onPageChange(currentPage + 1)}
            className="ml-2 bg-primary text-secondary px-4 py-2 rounded hover:bg-accent hover:text-primary transition duration-300"
            >
            Next
            </button>
        )}
        </div>
    );
};

export function BlogPostList({ posts }) {
    // Dummy data for categories
    const categories = ['Technology', 'Travel', 'Food', 'Health'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Categories Sidebar */}
            <div className="block col-span-1">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul>
                    {categories.map((category) => (
                    <li key={category} className="mb-2">
                        <Link href={`/blog/category/${category}`} className="text-secondary hover:underline">{category}</Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Blog Posts */}
            <div className="col-span-2">
                <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
                {posts.map((post) => (
                    <div key={post.id} className="mb-8">
                    <Link href={`/blog/post?id=${post.id}`} className="text-xl font-bold text-secondary hover:underline">{post.title}</Link>
                    <p className="text-gray-600 mb-2">{post.category}</p>
                    <p>{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ContactForm() {
    // Dummy function for handling form submission
    const handleContactForm = (e) => {
    e.preventDefault();
    // Replace this with your actual contact form submission logic
    console.log('Form submitted!');
    };

    return (
        <form onSubmit={handleContactForm} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded w-full px-3 py-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded w-full px-3 py-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="border rounded w-full px-3 py-2"
                    required
                ></textarea>
            </div>
            <button
            type="submit"
            className="bg-primary w-full text-secondary hover:text-primary font-semibold px-4 py-2 rounded hover:bg-accent transition duration-300"
            >
            Send Message
            </button>
            <div className="flex justify-between mt-4 text-xl">
                <FaInstagram />
                <FaLinkedin />
                <FaXTwitter />
                <FaFacebook />
            </div>
        </form>
    );
} 

export function NewsLetterSubscription() {
    // Dummy function for handling form submission
    const handleSubscription = (e) => {
    e.preventDefault();
    // Replace this with your actual newsletter subscription logic
    console.log('Subscribed!');
    };

    return (
        <form onSubmit={handleSubscription} className="flex space-x-2">
            <input
            type="email"
            placeholder="Your email"
            className="border border-accent/50 rounded px-2 py-1"
            required
            />
            <button
            type="submit"
            className="bg-primary text-secondary border border-accent/50 hover:text-white px-4 py-1 rounded hover:bg-accent transition duration-300"
            >
            Subscribe
            </button>
        </form>
    );
}

export function NavBar() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-primary/70 p-4 fixed top-0 left-0 right-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/"  className={pathName === '/' ? "text-accent text-xl font-bold animate-pulse" : "text-secondary text-xl font-bold"}>Clarity Pulse</Link>
                <div className="hidden sm:flex space-x-4">
                    <Link href="/" className={pathName === '/' ? "text-accent font-bold" : "text-secondary"}>Home</Link>
                    <Link href="/blog" className={pathName === '/blog' ? "text-accent font-bold" : "text-secondary"}>Blog</Link>
                    <Link href="/about" className={pathName === '/about' ? "text-accent font-bold" : "text-secondary"}>About</Link>
                    <Link href="#contact-us" className="text-secondary">Contact</Link>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-secondary">
                        {isMenuOpen ? <FaTimes size={24} className="font-bold" /> : <FaBars size={24} className="font-bold" />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-primary text-secondary p-4">
                        <Link href="/" className={pathName === '/' ? "text-accent font-bold block mb-2" : "block mb-2"}>Home</Link>
                        <Link href="/blog" className={pathName === '/blog' ? "text-accent font-bold block mb-2" : "block mb-2"}>Blog</Link>
                        <Link href="/about" className={pathName === '/about' ? "text-accent font-bold block mb-2" : "block mb-2"}>About</Link>
                        <Link href="#contact-us" className="block">Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export function Footer() {

    return (
        <footer className="bg-primary p-4 mt-8">
            <div className="container mx-auto text-center text-secondary">
                <p>&copy; 2024 Your Blog. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default function AppLayout({ children }) {

    return (
        <>
            <NavBar />
            <main className="mt-20">
                {children}
            </main>
            <section id="#subscribe" className="mb-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Newsletter Subscription</h2>
                {/* Add your newsletter subscription form component here */}
                <NewsLetterSubscription />
            </section>
            <section id="contact-us">
                <h2 className="text-2xl font-bold mb-4 text-center">Connect with Us</h2>
                {/* Add your social media integration component here */}
                <ContactForm />
            </section>
            <Footer />
        </>
    )
}