import PostItem from "../Components/postItem"

const Post = ({postProp}) => {
    return postProp.map((posts) => (
        <PostItem postItemProps={posts} key={posts.id} />
    ))
}

export default Post