import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TeamListDetailsPage() {
    const trainers = [
        {
            id: 1,
            name: 'Sacha',
            city: 'Bourg Palette',
            img: 'https://www.pokepedia.fr/images/thumb/a/ae/Sacha-Anim%C3%A9_LV.png/800px-Sacha-Anim%C3%A9_LV.png'
        },
        {
            id: 2,
            name: 'Ondine',
            city: 'Azuria',
            img: 'https://www.pokepedia.fr/images/thumb/3/39/Ondine-LGPE.png/800px-Ondine-LGPE.png'  
        },
        {
            id: 3,
            name: 'Pierre',
            city: 'Argenta',
            img: 'https://www.pokepedia.fr/images/thumb/7/73/Pierre-LGPE.png/150px-Pierre-LGPE.png'
        }
    ];

    const { trainerId } = useParams();
    console.log(trainerId)

    const trainersFound = trainers.find((trainer) => {
        return(
            trainer.id == trainerId
        )
    })

    return(
        <>
            <Header /> 
            <article>
                <h2>{trainersFound.name}</h2>
                <p>{trainersFound.city}</p>
                <img src={trainersFound.img} alt="" />
            </article>
            <Footer />
        </>
    )
}

export default TeamListDetailsPage;