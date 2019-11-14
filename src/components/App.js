import React from 'react'
import ArticlesList from './ArticlesList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">App name</h1>
            </div>
            <ArticlesList articles={articles} />
        </div>
    )
}

export default App