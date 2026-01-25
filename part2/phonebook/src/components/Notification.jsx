const Notification = ({ info, type }) => {
    if (info === null) {
        return null
    }

    return (
        <div className={type}>
            {info}
        </div>
         
    )
}

export default Notification