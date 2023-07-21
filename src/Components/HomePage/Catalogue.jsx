import {useEffect, useState} from "react";
import CatalogueCard from "../CatalogueCard/CatalogueCard.jsx";
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./catalogueStyle.css";

const Catalogue = () => {
    const [catalogues, setCatalogues] = useState([""]);
    

    useEffect(()=> {

        fetch("/catalogue.json")
        .then(res => res.json())
        .then(data => setCatalogues(data))

    }, [])

    const [sliderRef] = useKeenSlider({
        loop: true, mode: "free", slides: {
            perView: 3, spacing: 15,
        },
    })

    return (<div className="py-14 bg-gray-100">
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold">All the Catalogue You Love</h1>
            <p className="text-xl text-gray-500">
                Great stuff. New and used. 350,000+ items added every day.
            </p>
        </div>
        <div
            ref={sliderRef}
            className="keen-slider grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 my-12 overflow-hidden"
        >
            {catalogues.map((catalogue, i) => (<div key={i} className="keen-slider__slide p-8">
                <CatalogueCard catalogue={catalogue} />
            </div>))}
        </div>

    </div>);
};

export default Catalogue;
