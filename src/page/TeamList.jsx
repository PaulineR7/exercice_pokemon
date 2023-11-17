import { Link } from "react-router-dom";

function TeamList() {
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

    
    return(
        <>
            <h2>Les dresseurs : </h2>
            {trainers.map((trainer) => {
                return(
                    <Link to={"/trainers/" + trainer.id + "/details"}>
                        <article>
                            <h2>{trainer.name}</h2>
                            <img src={trainer.img} alt="" />
                        </article>
                    </Link>
                )
            })}
        </>
    )
}


export default TeamList;