"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropDownItem } from "ui";
import { useState, Fragment } from "react";
import Image from "next/image";
import { BuyWithAmazonButton } from "@/components/BuyWithAmazonButton";
import { jobs, JobLevel, Job } from "./jobs";
import { books, Book } from "./books";

function filterRelevantBooks(job: JobLevel, books: Book[]) {
  return books
    .filter((book) => book.ratings[job] >= 4)
    .sort((a, b) => b.ratings[job] - a.ratings[job]);
}

function getRecommendedBooks(
  job: JobLevel,
  nextJob?: JobLevel,
): [Book[], Book[]] {
  const currentRecommendations = [];
  const nextRecommendations = [];

  // First we triage the books into current and next so that we don't have duplicates
  for (const book of books) {
    const nextJobRating: number = (nextJob && book.ratings[nextJob]) || 0;
    if (book.ratings[job] >= nextJobRating) {
      currentRecommendations.push(book);
    } else {
      nextRecommendations.push(book);
    }
  }

  return [
    filterRelevantBooks(job, currentRecommendations),
    nextJob ? filterRelevantBooks(nextJob, nextRecommendations) : [],
  ];
}

function BookCard(book: Book) {
  return (
    <div className="flex mb-8">
      <div className="w-32 flex-none">
        <Image
          src={book.pictureUrl}
          alt={`Book Cover for ${book.title}`}
          width={100}
          height={100}
          className="object-cover rounded h-32 w-32 flex-none"
        />
        <BuyWithAmazonButton amazonLink={book.amazonLink} />
      </div>

      <div className="pl-4 pr-4 flex-auto min-w-0">
        <div className="flex justify-between">
          <p className="flex-1 text-indigo-600 text-lg text-ellipsis lg:overflow-hidden lg:whitespace-nowrap pr-2">
            {book.title}
          </p>
        </div>
        <p className="text-slate-500 text-sm mb-2 text-ellipsis lg:overflow-hidden lg:whitespace-nowrap">
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
  const [job, setJob] = useState<Job>(jobs[0]);
  const [nextPossibleJobs, setNextPossibleJobs] = useState<Job[]>(
    jobs.filter((j) => j.previousJob === job.id),
  );
  const [nextJob, setNextJob] = useState<Job>(nextPossibleJobs[0]);
  const [currentRecommendations, nextRecommendations] = getRecommendedBooks(
    job.id,
    nextJob && nextJob.id,
  );

  return (
    <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-5xl">
      <h2 className="font-semibold leading-6 text-indigo-600 mb-5">
        Engineering Reading Recommendations
      </h2>

      <p className="mt-1 text-sm leading-6 text-gray-600">
        This is a list of books that I recommend to engineers at different
        levels of their career. I&apos;ve read all of these books and found them
        to be helpful. I hope you find them helpful too! This is based on a
        rather simple model of career progression, but should be a good starting
        point for most people. If you have any suggestions, please let me know!
      </p>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        I will be adding new references to this list as I read more books.
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
            onChange={(e) => setNextJob(e)}
            label="Which role do you want to do next?"
            items={nextPossibleJobs}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-4 sm:grid-cols-1 mt-16">
        <div>
          <h3 className="text-xl font-bold mb-5">{job.label}</h3>
          {currentRecommendations.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {nextJob && (
          <div>
            <h3 className="text-xl font-bold mb-5">{nextJob.label}</h3>
            {nextRecommendations.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}

        {!nextJob && (
          <div className="text-center pt-8 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No Next Job Selected
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Come back later for more recommendations!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
