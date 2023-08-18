"use client"

import { Dropdown, DropDownItem } from 'ui';
import { useState } from 'react'

const jobs: DropDownItem[] = [{
    label: 'Software Engineer',
    id: 'software-engineer'
}, {
    label: 'Product Manager',
    id: 'product-manager'
}]

export default function Products() {
const [selected, setSelected] = useState<DropDownItem>(jobs[0]);

  return <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-5xl">
  <h2 className="font-semibold leading-6 text-indigo-600 mb-5">Reading Recommendations</h2>

  <Dropdown selected={selected} onChange={setSelected} label="Who are you?" items={jobs} />
  </div>
}
