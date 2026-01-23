const Person = ({ person, handleDelete }) => {
    return (
        <div>
            <li>{person.name} {person.number}<button onClick={() => handleDelete(person.id, person.name)}>Delete</button></li>
        </div>
    )
}

export default Person;