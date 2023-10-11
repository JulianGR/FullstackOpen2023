import Part from './Part'

const Course = ({ course }) => {
    const eachPart = course.parts.map((i) => (<Part key={i.id} part={i} />))

    return (
        <>
            <h1 key={course.id}>{course.name}</h1>
            <ul>
                {eachPart}
            </ul>
        </>
    )
}

export default Course