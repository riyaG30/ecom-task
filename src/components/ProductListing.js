import {  CardMedia, Typography } from '@mui/material'; // Keep these imports for potential layout needs

const ProductList = ({ products }) => {


  return (
    <div className="container mx-auto px-4 mt-16">  {/* Main container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Grid for products */}
        {products.map((product) => (
          <div key={product.id} className="rounded-lg shadow-md overflow-hidden"> {/* Card */}
            <CardMedia
              className="h-48 object-cover rounded-t-lg"
              image={product.image}
              alt={product.title}
            />
            <div className="p-4">  {/* Card content */}
              <Typography variant="h6" component="div" className="font-bold mb-2">
                {product.title}
              </Typography>
              <Typography variant="body2" className="text-gray-500 line-clamp-2">
                {product.description.split(' ').slice(0, 15).join(' ')}...
              </Typography>
              <div className="flex justify-between items-center mt-4"> {/* Price section */}
                <Typography variant="body2" className="text-green-500 font-bold">
                  ${product.price}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;