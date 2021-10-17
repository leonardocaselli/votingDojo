
const validateForm = Poll => {
    let errors = {}
    if (!Poll.question || Poll.question.length < 10) errors['question'] = 'React question has less than 10 characters'
    if (!Poll.options || Poll.options.length < 2) errors['options'] = 'React type has less than 3 characters'


    const hasError = Object.entries(errors).length !== 0
    return [hasError, errors]
}
export default validateForm