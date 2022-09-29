import axios from "axios"

const PostItem = ({postItemProps}) => {

    const clickHandler = async (e) => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
        console.log(data.data.id)
    }


    return (
        <h1 onClick={clickHandler} id={postItemProps.id}>{postItemProps.title}</h1>
    )
}

export default PostItem