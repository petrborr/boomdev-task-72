const tagList = ["boomdotdev", "task", "tags", "react"]

const Tags = (props) => {
     return <div class="tags">
                {props.tags.map((tag, index) => (
                    <div key={index} class="tag">#{tag}</div>
                ))}
            </div>;
}
Tags.defaultProps = {
    tags: tagList
}

export default Tags
