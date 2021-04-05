const index = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>This is NextJs Index Page</h1>
                <h3>NextJS is best Starter</h3>
                <button className="btn btn-primary">
                    <a href='/about'>
                        About 
                    </a>
                </button>
                <button className="btn btn-primary">
                    <a href="/blog">
                        Blog
                    </a>
                </button>
                <button className="btn btn-primary">
                    <a href="/contact">
                        Contact Us
                    </a>
                </button>
            </div>
        </div>
    )
}

export default index