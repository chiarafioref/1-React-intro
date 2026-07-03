function Colors() {
    const boxColors = ["green", "purple", "pink", "blue", "orange", "red"];

    return (
        <>

            <div className="container text-center my-5">
                <div className="row row-cols-auto justify-content-center g-3">


                    {boxColors.map((color, index) => (


                        <div key={index} className="col">


                            <div
                                className="p-4 rounded text-white fw-bold shadow-sm"
                                style={{ backgroundColor: color, minWidth: "120px" }}
                            >
                                {color}
                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </>
    );
}

export default Colors;
