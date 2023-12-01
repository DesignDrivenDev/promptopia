"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";
const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // @ts-ignore
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response?.json();
      // @ts-ignore
      if (session?.user?.id) {
        setPosts(data);
      }
    };
    fetchPosts();
    // @ts-ignore
  }, [session?.user.id]);

  const handleEdit = (post: any) => {
    router.push(`/update-prompt?id=${post._id}`);
    console.log("lwqkeodfjnqmwlskdncvn dsmdc vndskm");
  };

  const handleDelete = async (post: any) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter(
          (item: any) => item._id !== post._id
        );

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Profile
        name={"My"}
        desc={"Welcome to ypur personalizes profile page."}
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <div
        className="outline_btn cursor-pointer mb-12"
        onClick={() => router.push(`/update-prompt?id=${"1223456789876543"}`)}
      >
        Hello
      </div>
    </div>
  );
};

export default MyProfile;
