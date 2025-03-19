function userSerializer(user) {
    return {
        _id: user._id.toString(),
        email: user.email,
        user: user.user
    };
}

export default userSerializer;
