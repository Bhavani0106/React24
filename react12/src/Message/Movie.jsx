let Movie= ()=>{
    let movie_Name = "Salaar"
    let movie_Hero="Prabhas"
    let movie_Image='data:image/jpeg;base64,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'
    return <div>
        <h2>Movie Component</h2>
        <hr />
        <h3>Name:{movie_Name}</h3>
        <h3>Hero:{movie_Hero}</h3>
        <img src={movie_Image} alt="" />
        <button className="btn btn-success">Buy Ticket</button>
    </div>
}
export default Movie