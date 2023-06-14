import { MongoClient } from 'mongodb';

const url = `mongodb+srv://mongoDb:mongoDb@cluster0.5tff1ro.mongodb.net/issuetracker?retryWrites=true&w=majority`;
let db;

const connectToDb = (callback) => {
    MongoClient.connect(url)
        .then(client => {
            db = client.db();
            callback(url);
        }).catch(err => {
            console.log(err);
            callback(null, err);
        })
}

const getDb = () => {
    return db;
}

export {
    connectToDb,
    getDb
};