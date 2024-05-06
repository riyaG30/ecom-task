
const ProductList = ({ products }) => {
  return (
    <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {products.map((product) => (

        <div
          key={product.id}
          className="flex flex-col items-center justify-between 
          hover:scale-105 transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 shadow-md relative "
        >

          <div className="h-[180px] w-[70%] ">
            <img className="object-cover h-full w-full" src={product.image} />
          </div>

          <div className=" bg-blue-400 p-1 absolute top-1/2 right-0  ">
            <div> {product.category} </div>
          </div>


          <div className="">
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
              {product.title}
            </p>

            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
              {product.description.split(' ').slice(0, 15).join(' ')}
            </p>


            <div className="flex items-center justify-between">
              <p className="font-bold text-lg text-green-600">
                ${product.price}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;