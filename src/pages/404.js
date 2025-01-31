import Button from "@/components/atoms/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <section class="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800 ">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 hover:animate-spin">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400 ">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn{"'"}t find this page.
            </p>
            <p class="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Button
              onClick={() => router.back()}
              href={"/products"}
              className="px-8 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
