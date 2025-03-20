const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
    // id_user will be used by default in mongoDB
});

app.post('/teste', async(req, res) => {
    try{

    const { name, email, password} = req.body

    const user = new User({name, email, password})

    await user.save()

    res.status(200).send({"user saved: ": user})

    }catch(err){
        res.status(500).send({err})
    }

})

app.get('/teste', async (req,res) => {
    try{

    const user = await User.find()

    res.status(200).send({user})

    }catch(err){
    res.status(500).send({err})
    }
})