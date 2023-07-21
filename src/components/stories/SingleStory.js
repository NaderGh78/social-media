const SingleStory = ({ story }) => {
    return (
        <div className="storieImg">
            <img src={story.img} alt="" />
            <h3>{story.name}</h3>
        </div>
    )
}

export default SingleStory;