import React, { useState, useEffect } from "react";

export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=Fkjw7Gc2MgEKN1teIFhCtteULlWekt5gKU8LVj20`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return < div/>;
    
    return(
        <div>

            <photoData.media_type = "image" ? (

            <img src={photoData.url} alt={photoData.url} />
            ) : (
                <iframe
                />
            )

            <p>
                {photoData.explanation}
            </p>
        </div>
    )
}