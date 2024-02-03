import Image from "next/image";
import Link from "next/link";
import { ContactForm, HomeHero, NewsLetterSubscription } from "./components/reuseable";

export default function Home() {
  // Dummy data for featured and recent posts
  const featuredPosts = [
    { id: 1, title: 'Featured Post 1', category: 'Technology' },
    { id: 2, title: 'Featured Post 2', category: 'Travel' },
    { id: 3, title: 'Featured Post 3', category: 'Business' },
  ];

  const recentPosts = [
    { id: 4, title: 'Recent Post 1', category: 'Food' },
    { id: 5, title: 'Recent Post 2', category: 'Health' },
    { id: 6, title: 'Recent Post 3', category: 'Business' },
  ];

  // Dummy data for categories
  const categories = ['Technology', 'Travel', 'Food', 'Health', 'Business'];

  return (
    <main className="px-2">
      <HomeHero />
      <div className="mt-8">
      {/* Add Hero section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <Link href={`/blog/post?id=${post.id}`} className="text-secondary hover:underline">{post.title}</Link>
                <p className="text-secondary">{post.category}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
          <div className="flex justify-center space-x-4 overflow-auto p-4 items-center">
            {categories.map((category) => (
              <Link key={category} href={`/post/category/${category}`} className="text-accent hover:underline text-sm sm:text-base">{category}</Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <Link href={`/blog/post?${post.id}`} className="text-secondary hover:underline">{post.title}</Link>
                <p className="text-secondary">{post.category}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
