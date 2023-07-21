import React from 'react'
import { Helmet } from "react-helmet-async";
import Animal from "../../Components/Animal/Animal";

export default function Wildlife({animalData}) {
  return (
    <>
    <Helmet>
      <title>Norfolk Wildlife Catalogue Page</title>
      <meta
        name="description"
        content="A catalogue of wildlife you can find in Norfolk"
      />
      <link rel="canonical" href="/" />
    </Helmet>
<main>
    {animalData.map((animal, key) => (
<Animal   key={animal._id}
          name={animal.name}
          imgUrl={animal.image_url}
          description={animal.description}
          species={animal.species}
          habitat={animal.habitat}/>
))}
    </main>   
  </>
  )
}
