import {collection, addDoc, doc, deleteDoc} from "firebase/firestore";

import {database} from "./firebaseSetup";

export async function writeToDB(data){
    try{
        console.log(data);
        const docRef = await addDoc(collection(database, "goals"), data);
        console.log(docRef.id)
    }catch(err){
        console.log(err);
    }
    
}

export async function deleteFromDB(id){
    try{
        await deleteDoc(doc(database, "goals",id));
    }catch (err) {
        console.log(err);
    }
}