import { JobLevel } from "./jobs";

export interface Book {
  id: string;
  pictureUrl: string;
  amazonLink: string;
  description?: string;
  title: string;
  author: string;
  ratings: Record<JobLevel, number>;
}

export const books: Book[] = [
  {
    id: "0",
    pictureUrl: "https://m.media-amazon.com/images/I/41ppIZRaR8L.jpg",
    amazonLink: "https://amzn.to/44t7C2l",
    description:
      "Strategy matters, it is not only about the things you will do but also about the things you will not do. This book is a great read for anyone who wants to understand what strategy is and how to apply it. It is full of examples and case studies that will help you understand the concepts and apply them to your own situation.",
    title: "Good Strategy/Bad Strategy: The Difference and Why It Matters",
    author: "Richard Rumelt",
    ratings: {
      "junior-software-engineer": 0,
      "software-engineer": 0,
      "senior-software-engineer": 3,
      "principle-software-engineer": 4,
      "engineering-manager": 5,
    },
  },
  {
    id: "1",
    pictureUrl: "https://m.media-amazon.com/images/I/51Fi5Fq4u5L.jpg",
    amazonLink: "https://amzn.to/3sufrra",
    description:
      "The book is a novel happening in the workplace. The main character is Bill Palmer, an IT manager at Parts Unlimited. The company is in trouble and Bill is given the task of turning around the IT department. The book follows Bill as he learns about Streamlining Engineering Operations and how to apply it to his company. This book is really well written, it is full of twists and turns and the angles at which the story is told are really enlightenening in regards to the current state of engineering best practices and pitfalls not to get into.",
    title:
      "The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win",
    author: "Gene Kim, Kevin Behr, George Spafford",
    ratings: {
      "junior-software-engineer": 3,
      "software-engineer": 3,
      "senior-software-engineer": 4,
      "principle-software-engineer": 5,
      "engineering-manager": 5,
    },
  },
  {
    id: "2",
    pictureUrl: "https://m.media-amazon.com/images/I/51ygINtzhJL.jpg",
    amazonLink: "https://amzn.to/3EjEobi",
    description:
      "It is all in the title, really. Software engineering is hard deep work. This book makes the case for setting aside time to do deep work and how to do it. It is a great read for anyone who wants to be more productive and get more done. Especially if you are working in a place that is drowning in meetings and distractions.",
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    ratings: {
      "junior-software-engineer": 5,
      "software-engineer": 4,
      "senior-software-engineer": 4,
      "principle-software-engineer": 3,
      "engineering-manager": 3,
    },
  },
  {
    id: "3",
    pictureUrl:
      "https://m.media-amazon.com/images/I/41MFKXNZVOL._SX327_BO1,204,203,200_.jpg",
    amazonLink: "https://amzn.to/3QRKqaQ",
    description:
      "This book is putting in perspective what it means to be a good manager. It doesn't mean protect your team from the rest of the company, it doesn't mean being nice to everyone, it doesn't mean being a jerk. It means caring personally and challenging directly. It means giving guidance and feedback. It means being a leader.",
    title: "Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity",
    author: "Kim Scott",
    ratings: {
      "junior-software-engineer": 2,
      "software-engineer": 2,
      "senior-software-engineer": 3,
      "principle-software-engineer": 3,
      "engineering-manager": 5,
    },
  },
  {
    id: "4",
    pictureUrl: "https://m.media-amazon.com/images/I/51N9XkgX1dL.jpg",
    amazonLink: "https://amzn.to/3PeaQ5n",
    description:
      "Contrary to popular belief, going faster doesn't necessarily means that the quality has to go down. This book is about the scrum methodology which helps to drive value faster by reducing the amount of work necessary to deliver value and deliver it as soon as possible.",
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland, J.J. Sutherland",
    ratings: {
      "junior-software-engineer": 5,
      "software-engineer": 4,
      "senior-software-engineer": 3,
      "principle-software-engineer": 2,
      "engineering-manager": 2,
    },
  },
  {
    id: "5",
    pictureUrl: "https://m.media-amazon.com/images/I/41V9HNQcdzL.jpg",
    amazonLink: "https://amzn.to/3Eb76vf",
    description:
      "This books is written as a novel, it is a great and easy read. It follows a new CEO who is tasked with turning around a dysfunctional team. It is a great read for anyone who wants to understand what makes a team work and what makes it fail. It fully reprensents what leadership teams should not do and how to fix it.",
    title: "The Five Dysfunctions of a Team: A Leadership Fable",
    author: "Patrick Lencioni",
    ratings: {
      "junior-software-engineer": 0,
      "software-engineer": 1,
      "senior-software-engineer": 2,
      "principle-software-engineer": 3,
      "engineering-manager": 5,
    },
  },
  {
    id: "6",
    pictureUrl: "https://m.media-amazon.com/images/I/41pm6OElXCL.jpg",
    amazonLink: "https://amzn.to/3OWdcEH",
    description:
      "Frances Frei is a great leader, workat Uber and Harvard. This book is about how to empower people around you. Great teams and great companies are not built by people that just follow orders, they are built by great people who are empowered to do great things.",
    title:
      "Unleashed: The Unapologetic Leader's Guide to Empowering Everyone Around You",
    author: "Frances Frei, Anne Morriss",
    ratings: {
      "junior-software-engineer": 2,
      "software-engineer": 3,
      "senior-software-engineer": 4,
      "principle-software-engineer": 5,
      "engineering-manager": 5,
    },
  },
];
