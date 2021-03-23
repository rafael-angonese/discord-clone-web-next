import * as yup from 'yup';

async function yupValidator(schema, data) {
    try {
        await schema.validate(data, { abortEarly: false });

        return null;
    } catch (errors) {
        const errorMessages = {};
        if (errors instanceof yup.ValidationError) {
            errors.inner.forEach(item => {
                errorMessages[item.path] = {
                    path: item.path,
                    type: item.type,
                    message: item.message,
                    label: item.params.label
                };
            });
        }

        return errorMessages;
    }
}

export default yupValidator;
