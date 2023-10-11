import Part from './Part'

const Course = ({ course }) => {
    const eachPart = course.parts.map((i) => (<Part key={i.id} part={i} />))
    const totalExercises = course.parts.reduce((sum, part) => sum+ part.exercises,0)
    return (
        <>
            <h1 key={course.id}>{course.name}</h1>
            <ul>
                {eachPart}
            </ul>
            <b>Total exercises: {totalExercises}</b>
        </>
    )
}

export default Course