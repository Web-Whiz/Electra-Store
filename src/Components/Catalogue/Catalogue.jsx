import React, { useEffect, useState } from "react";
import CatalogueCard from "../CatalogueCard/CatalogueCard";

const Catalogue = () => {
  const [catalogues, setCatalogues] = useState([""]);

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => setCatalogues(data));
  }, []);

  return (
    <div className="py-14 bg-gray-100">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">All the Catalogue You Love</h1>
        <p className="text-xl text-gray-500">
          Great stuff. New and used. 350,000+ items added every day.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 my-12 md:mx-44">
        {
            catalogues.map((catalogue, i) => <CatalogueCard key={i} catalogue={catalogue} />)
        }
      </div>
    </div>
  );
};

export default Catalogue;
