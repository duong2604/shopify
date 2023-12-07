const Cart = () => {
  return (
    <main className="container mx-auto my-auto h-screen mt-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="col-span-2 p-5">
          <div className="cart flex justify-between">
            <h2 className="text-xl font-bold">Shoping Cart</h2>
            <h3 className="text-xl font-bold">3 Items</h3>
          </div>
          <hr className="border-black-300 text-center text-2xl mt-8" />
          <div>
            <div className="flex justify-between items-center mt-6 pt-6">
              <div className="flex items-center">
                <img
                  src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg"
                  width="60"
                  className="rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <span className="md:text-md font-medium">Product -1</span>
                  <span className="text-xs font-light text-gray-400">
                    #41551
                  </span>
                  <span className="text-sm font-light text-orange-400">
                    Categories-1
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex">
                  <span className="font-semibold">-</span>
                  <input
                    type="text"
                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                    value="1"
                  />
                  <span className="font-semibold">+</span>
                </div>
                <div className="pr-8">
                  <span className="text-xs font-medium">$10.50</span>
                </div>
                <div>
                  <i className="fa fa-close text-xs font-medium"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6 mt-6 border-t">
              <div className="flex items-center">
                <img
                  src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/cfv-220-7-1-66.jpg"
                  width="60"
                  className="rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <span className="text-md font-medium w-auto">Product -2</span>
                  <span className="text-xs font-light text-gray-400">
                    #66999
                  </span>
                  <span className="text-sm font-light text-orange-400">
                    Categories-2
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex">
                  <span className="font-semibold">-</span>
                  <input
                    type="text"
                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                    value="1"
                  />
                  <span className="font-semibold">+</span>
                </div>
                <div className="pr-8">
                  <span className="text-xs font-medium">$10.50</span>
                </div>
                <div>
                  <i className="fa fa-close text-xs font-medium"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <div className="flex items-center">
                <img
                  src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/cfc-204.jpg"
                  width="60"
                  className="rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <span className="text-md font-medium">Product -3</span>
                  <span className="text-xs font-light text-gray-400">
                    #86577
                  </span>
                  <span className="text-sm font-light text-orange-400">
                    Categories-3
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="pr-8 flex">
                  <span className="font-semibold">-</span>
                  <input
                    type="text"
                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                    value="1"
                  />
                  <span className="font-semibold">+</span>
                </div>
                <div className="pr-8">
                  <span className="text-xs font-medium">$10.50</span>
                </div>
                <div>
                  <i className="fa fa-close text-xs font-medium"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <div className="flex items-center">
                <i className="fa fa-arrow-left text-sm pr-2 text-blue-500"></i>
                <span className="text-md font-medium text-blue-500">
                  Continue Shopping
                </span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-sm font-medium text-gray-400 mr-1">
                  Subtotal:
                </span>
                <span className="text-lg font-bold text-gray-800"> $24.90</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 col-span-2 sm:col-span-1">
          <div className="checkout">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <hr className="border-black-300 text-center text-2xl mt-8" />
            <div className="flex justify-between mt-5 uppercase font-semibold">
              <span>Items 3</span>
              <span>$24.90</span>
            </div>
            <div className="my-5 items-star">
              <span className="uppercase text-md font-medium">Promo code</span>
              <input
                type="text"
                className="p-2 w-full mt-2 bg-gray-300 rounded"
                placeholder="Enter your code"
              />
              <button className="py-2 px-6 bg-orange-400 text-white rounded mt-3">
                Apply
              </button>
            </div>
            <hr className="border-black-300 text-center text-2xl mt-8" />
            <div className="flex justify-between mt-3 font-semibold">
              <span className="uppercase">Total cost</span>
              <span>$24.90</span>
            </div>
            <button className="uppercase font-medium py-2 w-full bg-blue-500 text-white rounded mt-8">
              checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Cart;
