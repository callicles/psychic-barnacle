import { DropDownItem } from "ui";

export type JobLevel =
  | "junior-software-engineer"
  | "software-engineer"
  | "senior-software-engineer"
  | "principle-software-engineer"
  | "engineering-manager";

export interface Job extends DropDownItem {
  id: JobLevel;
  previousJob?: JobLevel;
}

export const jobs: Job[] = [
  //   {
  //     label: "Junior Software Engineer",
  //     id: "junior-software-engineer",
  //   },
  {
    label: "Software Engineer",
    id: "software-engineer",
    previousJob: "junior-software-engineer",
  },
  //   {
  //     label: "Senior Software Engineer",
  //     id: "senior-software-engineer",
  //     previousJob: "software-engineer",
  //   },
  {
    label: "Principal Software Engineer",
    id: "principle-software-engineer",
    previousJob: "software-engineer",
  },
  {
    label: "Engineering Manager",
    id: "engineering-manager",
    previousJob: "software-engineer",
  },
];
