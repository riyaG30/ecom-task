

// import { CardMedia, Typography } from '@mui/material'; // Keep these imports for potential layout needs

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center p-2 md:p-5 mt-2 mb-2 md:mx-5 overflow-x-hidden max-w-full mx-auto ">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-1/5 border-4 justify-center items-center m-4 mx-uto gap-1 p-0"
        >
          <div className="w-[70%]">
            <img className="object-cover" src={product.image} />
          </div>
          <div className=" bg-blue-600 p-1  ">
            <div> {product.category} </div>
          </div>
          <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
            <div className="text-lg text-slate-700 font-semibold">
              {product.title}
            </div>
            <div className="text-sm text-slate-700 font-medium">
              {product.description.split(' ').slice(0, 15).join(' ')}
            </div>
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