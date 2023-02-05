import {products} from '../products/products'

export  default function Products() {
    return (
        <div className='mx-auto max-w-2xl py-12 px-6 lg:max-w-5xl'>
            <h2 className="font-semibold leading-6 text-indigo-600 mb-5">Products</h2>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
        <a href={product.href} key={product.slug}>
      <li  className="col-span-1 h-full divide-y divide-gray-200 rounded-lg bg-white shadow transform transition duration-500 hover:scale-110 hover:cursor-pointer">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">{product.name}</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.summary}</p>
          </div>
          <img className="h-10 w-10 flex-shrink-0" src={product.icon} alt="" />
        </div>
      </li>
      </a>
    ))}
  </ul>
  </div>) 
}