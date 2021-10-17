import Destination from "../../Hook/Hook"

const Anotherroom = () => {
    const [places] = Destination()
    const Newplaces =  [...places];
    return Newplaces;
}

export default Anotherroom;