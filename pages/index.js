import Header from '../components/header'
import Footer from '../components/footer'
const index = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <Header />
                <h1>This is NextJs Index Page</h1>
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
                <Footer />
            </div>
        </div>
    )
}

export default index