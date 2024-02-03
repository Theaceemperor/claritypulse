'use client'

import { BlogPostDetail, CommentsSection } from '@/app/components/reuseable';
import { useRouter, useSearchParams } from 'next/navigation';

const PostDetailPage = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    // Dummy data for the blog post and related posts
    const dummyPost = {
    id: 1,
    title: 'Sample Blog Post',
    category: 'Technology',
    content: '<p>This is the content of the blog post.</p>',
    author: 'John Doe',
    date: 'January 31, 2024',
    commentsCount: 5,
    };

    const dummyRelatedPosts = [
    { id: 2, title: 'Related Post 1', category: 'Technology' },
    { id: 3, title: 'Related Post 2', category: 'Technology' },
    // ... add more related posts
    ];

    const dummyComments = [
    { author: 'Alice', text: 'Great post!' },
    { author: 'Bob', text: 'I learned a lot from this.' },
    // ... add more comments
    ];

    const id = searchParam.get('id');

    // Ensure id is available and convert it to a number
    const postId = id && parseInt(id, 10);

    if (!postId || isNaN(postId)) {
    return <p className='ml-2'>Invalid post ID</p>;
    }

    return (
        <div className='px-2'>
            <h1 className="text-4xl font-bold mb-8">Blog Post Detail</h1>
            <BlogPostDetail post={dummyPost} relatedPosts={dummyRelatedPosts} />
            <CommentsSection comments={dummyComments} />
        </div>
    );
};

export default PostDetailPage;
