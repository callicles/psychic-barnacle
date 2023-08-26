"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropDownItem } from "ui";
import { useState, Fragment } from "react";
import Image from "next/image";
import { BuyWithAmazonButton } from "@/components/BuyWithAmazonButton";

interface Job extends DropDownItem {
  previousJob?: string;
}

const jobs: Job[] = [
  {
    label: "Junior Software Engineer",
    id: "junior-software-engineer",
  },
  {
    label: "Software Engineer",
    id: "software-engineer",
    previousJob: "junior-software-engineer",
  },
  {
    label: "Senior Software Engineer",
    id: "senior-software-engineer",
    previousJob: "software-engineer",
  },
  {
    label: "Principal Software Engineer",
    id: "principle-software-engineer",
    previousJob: "senior-software-engineer",
  },
  {
    label: "Engineering Manager",
    id: "engineering-manager",
    previousJob: "senior-software-engineer",
  },
];

interface Book {
  id: string;
  pictureUrl: string;
  amazonLink: string;
  description?: string;
  title: string;
  author: string;
  recommendedFor: string[];
}

const books: Book[] = [
  {
    id: "0",
    pictureUrl: "https://m.media-amazon.com/images/I/41uPjEenkFL.jpg",
    amazonLink: "https://amzn.to/3j1Q8Zq",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl.",
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    recommendedFor: ["junior-software-engineer", "software-engineer"],
  },
  {
    id: "0",
    pictureUrl: "https://m.media-amazon.com/images/I/41uPjEenkFL.jpg",
    amazonLink: "https://amzn.to/3j1Q8Zq",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl.",
    title:
      "The Pragmatic Programmer with a veru long title that will be truncated",
    author: "Andy Hunt and a very long author name that will be truncated",
    recommendedFor: ["junior-software-engineer", "software-engineer"],
  },
  {
    id: "0",
    pictureUrl: "https://m.media-amazon.com/images/I/41uPjEenkFL.jpg",
    amazonLink: "https://amzn.to/3j1Q8Zq",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl. Nulla vel libero euismod, ullamcorper nisl quis, ultricies nisl. Donec euismod, nisl quis ultrices ultricies, nisl nisl aliquam nisl, quis aliquam nisl nisl quis nisl.",
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    recommendedFor: ["junior-software-engineer", "software-engineer"],
  },
];

function BookCard(book: Book) {
  return (
    <div className="flex mb-8">
      <Image
        src={book.pictureUrl}
        width={100}
        height={100}
        className="object-cover rounded h-32 w-32 flex-initial"
      />
      <div className="pl-4 pr-4 flex-auto min-w-0">
        <div className="flex justify-between">
          <p className="flex-1 text-indigo-600 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
            {book.title}
          </p>
          <BuyWithAmazonButton amazonLink={book.amazonLink} />
        </div>
        <p className="text-slate-500 text-sm mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {book.author}
        </p>
        <p className="text-sm text-justify leading-6 text-gray-600">
          {book.description}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  const [job, setJob] = useState<DropDownItem>(jobs[0]);
  const [nextPossibleJobs, setNextPossibleJobs] = useState<DropDownItem[]>(
    jobs.filter((j) => j.previousJob === job.id),
  );
  const [nextJob, setNextJob] = useState<DropDownItem>(nextPossibleJobs[0]);

  return (
    <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-5xl">
      <h2 className="font-semibold leading-6 text-indigo-600 mb-5">
        Engineering Reading Recommendations
      </h2>

      <p className="mt-1 text-sm leading-6 text-gray-600">
        This is a list of books that I recommend to engineers at different
        levels of their career. I've read all of these books and found them to
        be helpful in my career. I hope you find them helpful too! This is based
        on a rather simple model of career progression, but should be a good
        starting point for most people. If you have any suggestions, please let
        me know!
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <Dropdown
            selected={job}
            onChange={(e) => {
              setJob(e);
              const nextJobs = jobs.filter((j) => j.previousJob === e.id);
              setNextPossibleJobs(nextJobs);
              setNextJob(nextJobs[0]);
            }}
            label="Whats' your role?"
            items={jobs}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <Dropdown
            selected={nextJob}
            onChange={setNextJob}
            label="Which role do you want to do next?"
            items={nextPossibleJobs}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-16">
        <div>
          <h3 className="font-semibold leading-6 mb-5">{job.label}</h3>
          {books.map((book) => (
            <BookCard {...book} />
          ))}
        </div>

        <div>
          <h3 className="font-semibold leading-6 mb-5">{nextJob.label}</h3>
          {books.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}
