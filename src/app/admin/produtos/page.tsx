import ProductForm from '@/components/admin-panel/ProductForm'
import React from 'react'

const page = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto">
        <div className="bg-white w-[300xp] rounded-lg p-4">
            <ProductForm />
        </div>
    </div>
  )
}

export default page
