import React from 'react'
import {deleteDoc, doc} from 'firebase/firestore'
import {db, storage} from '../firebaseConfig'
import {toast} from 'react-toastify'
import {deleteObject, ref} from 'firebase/storage'

export default function DeleteArticle({id}) {
const deletePost= async()=>{
    try{ 
        await deleteDoc(doc( "articles", id))
        toast('Article deleted successfully', {type: 'success'})
        // const storageRef = ref(storage)
        // await deleteObject(storageRef)
        } catch(error) {
            toast('Error deleting article', {type: 'error'})
            console.error(error)
        }
    }

  return (
    <div>
        <button className='btn btn-danger' onClick={deletePost}>Delete</button>
    </div>
  )
}
