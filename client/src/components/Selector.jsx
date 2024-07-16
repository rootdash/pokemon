const Selector = ({ selected, setSelected }) => {

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    return (
        <>
            <div className="nes-select">
                <select required="" id="default_select" value={selected} onChange={handleChange}>
                    <option value={1}>Gen 1</option>
                    <option value={2}>Gen 2</option>
                    <option value={3}>Gen 3</option>
                    <option value={4}>Gen 4</option>
                    <option value={5}>Gen 5</option>
                    <option value={6}>Gen 6</option>
                    <option value={7}>Gen 7</option>
                    <option value={8}>Gen 8</option>
                    <option value={9}>Gen 9</option>
                </select>
            </div>
        </>
    )
}

export default Selector;