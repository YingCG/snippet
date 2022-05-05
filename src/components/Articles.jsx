import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import {db} from '../firebaseConfig'
import DeleteArticle from './DeleteArticle'

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy('createdAt', 'desc'))
        onSnapshot(q,((snapshot) => {
            // log to check how the data look like, to be able to design the data properties to display 
            // console.log(snapshot.docs)

            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setArticles(articles)
            console.log(articles);
        }))
    },[])

  return (
    <div>
        {
            articles.length === 0 ? ( <p>No articles found!</p>) 
            : (
                articles.map(({id, title, description, imageUrl, createdAt}) => (
                    <div className='border mt-3 p-3 bg-light' key={id}>
                        <div className="row">
                            <div className="col-4">
                                <img src={imageUrl} alt ={title} style ={{height: 180, width: 250}}/>
                            </div>
                            <div className="col-6">
                                <h2>{title}</h2>
                                <p className='small-text'>{createdAt.toDate().toDateString()}</p>
                                <p>{description}</p>
                                <DeleteArticle id={id} imageUrl={imageUrl} />
                            </div>
                        </div>
                    </div> 
                ))
            )
        }
    </div>
  )
}
