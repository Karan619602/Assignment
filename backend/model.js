import  mongoose from 'mongoose';

const schema= new mongoose.Schema({
    'name':{
        type: String,
        require:true,
    },
    'age':{
        type:Number,
        require:true
    }
});


const User= mongoose.model('User',schema);

export default User;