const ResourceItems = props => {
    console.log(props)
    const resources = props.resources.map(resource => {
        return (
            <div>
                Hello
            </div>
        )
    })
    return (
        <div>
            {resources}
        </div>
    )
}
export default ResourceItems;