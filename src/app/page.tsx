"use client"

import { product } from "@/lib/interfaces"
import { useEffect, useState, MouseEvent } from "react"

export default function Home() {
  const [products, setProducts] = useState<product[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const [productName, setProductName] = useState<string>("")
  const [price, setPrice] = useState<number>(0)
  const [imageData, setImageData] = useState<File | null>(null)

  useEffect(() => {
    fetch("/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then((products: product[]) => {
      setProducts(products)
    })
    setLoaded(true)
  }, [])

  function onSubmit(sender: MouseEvent<HTMLButtonElement>) {
    sender.preventDefault()

    console.log(productName)

    // fetch("/api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     "productName": productName,
    //     "price": price
    //   })
    // })
  }

  return (
    <main className="h-screen flex flex-col">
      <div className="bg-gradient-to-b bg-stone-800 py-8 px-16 text-white border-b-stone-500 border-b-2">
        <h1 className="text-3xl font-bold">
          Docker Database Testing!
        </h1>
        <p className="opacity-50">
          Stupidly basic website just for testing
        </p>
      </div>
      <div className="flex h-full px-16 py-8 gap-4">
        {/* Add product thingy */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl underline">Add new product!</h1>
          <div className="border-2 border-stone-600 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-8">
                <div>
                  {/* Product name */}
                  <div className="flex flex-col">
                    <span className="text-xl">Product name</span>
                    <input className="p-2 bg-black/10 placeholder:italic" placeholder="Product name" type="text" maxLength={25} name="product-name" onChange={(change) => { setProductName(change.currentTarget.value) }} />
                  </div>
                  {/* Price */}
                  <div className="flex flex-col">
                    <span className="text-xl">Price ($)</span>
                    <input className="p-2 bg-black/10 placeholder:italic disableSpinner" placeholder="Price" type="number" max={99999} name="price" onChange={(change) => { setPrice(change.currentTarget.valueAsNumber) }} />
                  </div>
                </div>
                {/* Image uploader */}
                <div className="flex min-h-full items-center justify-center">
                  <input type="file" accept=".png,.jpg,.jpeg" id="image" name="image" className="hidden" />
                  <label htmlFor="image" className="bg-green-400 p-2 text-white">Upload image</label>
                </div>
              </div>
              <div>
                <button className="border-2 w-full border-green-700 p-2 rounded-2xl" onClick={(sender) => { onSubmit(sender) }}>
                  Submit product.
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl underline">Products</h1>
          <div></div>
        </div>
      </div>
    </main>
  )
}
