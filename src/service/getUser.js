import User from '../models/User.js';
import userSerialaizer from '../serializer/userSerializer.js';

export default async function getUser( email ){

    const user = await User.findOne({ email })

    const data = userSerialaizer( user )

    return data 

}