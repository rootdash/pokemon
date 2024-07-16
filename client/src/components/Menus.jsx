const Menus = () => {
    return (
        <>
            <label>
                <input type="radio" className="nes-radio" name="answer" defaultChecked="" />
                <span>Pokedex</span>
            </label>
            <label>
                <input type="radio" className="nes-radio" name="answer" />
                <span>My Pokemon</span>
            </label>
        </>

    );
}

export default Menus;