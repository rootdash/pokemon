import Layout from "../../components/Layout";
import PokemonList from "../../components/PokemonList";
import Selector from "../../components/Selector";
import Type from "../../components/Type";
import Menus from "../../components/Menus";
import { useState } from "react";

const Main = () => {

    const [selected, setSelected] = useState(1);
    const [type, setType] = useState("fire");
    const types = ["fire", "water", "grass", "fairy", "dragon", "normal", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "steel"];
    const changeType = (direction) => {
        const currentIndex = types.indexOf(type);
        const newIndex = (currentIndex + direction + types.length) % types.length;
        setType(types[newIndex]);
    };
    console.log(selected)
    console.log(type)
    return (

        <Layout>
            <div className="flex w-full h-screen " >
                <div className="hidden w-1/5 lg:block" >
                    <div className=" h-1/5" >
                        <Selector selected={selected} setSelected={setSelected} />
                    </div>
                    <div className="flex-col h-4/5" ><Menus /></div>
                </div>
                <div className="flex-col w-full lg:w-4/5">
                    <div className="w-full h-1/5" > <Type type={type} changeType={changeType} /></div>

                    <PokemonList selected={selected} type={type} />
                    <div className="w-full lg:hidden" style={{ background: `aqua` }}>MENU</div>
                </div>
            </div>
        </Layout>

    );
}
export default Main;