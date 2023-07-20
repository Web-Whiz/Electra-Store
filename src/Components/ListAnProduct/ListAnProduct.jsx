import { useState } from "react";
import { useForm } from "react-hook-form";

const ListAnProduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data, selectedImages);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages(imagesArray);
  };

  return (
    <div className="bg-gray-200 py-20 px-2 shadow-inner shadow-[#ff600456]">
      <div className="mx-auto md:w-6/12 shadow-xl shadow-[#ff631540] rounded-3xl bg-white">
        <div className="card-body">
          <h1 className="text-3xl font-semibold mb-2">List An Item</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Product Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Product Name"
                className="input border border-orange-200 focus:border-orange-600"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Product Category</span>
              </label>
              <select className="select outline-dashed outline-1 outline-orange-300 w-full max-w-xs focus:border-orange-600"
              {...register("category", { required: true })}>
                <option disabled selected>
                  Chose Category
                </option>
                <option value="Books">Books</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Beauty">Beauty</option>
                <option value="Kids & Mom">Kids & Mom</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Sports & outdoor">Sports & outdoor</option>
                <option value="Home">Home</option>
                <option value="Electronics">Electronics</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Office & stationaries">
                  Office & stationaries
                </option>
                <option value="Music">Music</option>
                <option value="Pets & related">Pets & related</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Product Quantity</span>
              </label>
              <input
                type="number"
                {...register("quantity", { required: true })}
                placeholder="Product Quantity"
                className="input border border-orange-200 focus:border-orange-600"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Product Image URL</span>
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                {...register("image", { required: true })}
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />
              <input
                type="url"
                {...register("imageURL", { required: true })}
                placeholder="Product Image URL"
                className="input border border-orange-200 focus:border-orange-600 my-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Product Description</span>
              </label>
              <textarea
              
                className="border border-orange-200 outline-none focus:border-orange-600 rounded-xl resize-none p-4 text-base"
                placeholder="Product Description Here..."
                name=""
                {...register("description", { required: true })}
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Others Details</span>
              </label>
              <div className="space-y-2 md:space-x-8">
                <select className="select outline-dashed outline-1 outline-orange-300 w-full max-w-xs focus:border-orange-600"
                {...register("color", { required: false })}>
                  <option disabled selected>
                    Chose Color
                  </option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Grey">Grey</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Dark Blue">Dark Blue</option>
                  <option value="Purple">Purple</option>
                  <option value="Brown">Brown</option>
                  <option value="Yellow">Yellow</option>
                </select>
                <input
                  type="text"
                  {...register("brand", { required: true })}
                  placeholder="Brand"
                  className="input border border-orange-200 focus:border-orange-600"
                />
                <input
                  type="text"
                  {...register("size", { required: false })}
                  placeholder="Size"
                  className="input border border-orange-200 focus:border-orange-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Product Weight</span>
                </label>
                <input
                  type="text"
                  {...register("weight", { required: true })}
                  placeholder="Product Weight (kg)"
                  className="input border border-orange-200 focus:border-orange-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Product Price</span>
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Product Price"
                  className="input border border-orange-200 focus:border-orange-600"
                />
              </div>
              <div className="flex justify-end">
                <input
                  className="bg-gradient-to-tl from-yellow-400 to-orange-500 py-4 px-8 rounded-lg text-xl font-semibold text-black hover:scale-105 duration-300 my-6 hover:cursor-pointer"
                  type="submit"
                  value="List Item"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListAnProduct;
