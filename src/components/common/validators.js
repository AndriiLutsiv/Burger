export const requiredField = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field must not be empty'
    }
}

export const maxLengthCreator = (max) => {
    return (value) => {
        if (value.length > max) {
            return `Max length ${max} characters allowed`
        } else {
            return undefined;
        }
    }
}

export const minLengthCreator = (min) => {
    return (value) => {
        if (value.length < min) {
            return `Min length ${min} characters required`
        } else {
            return undefined;
        }
    }
}