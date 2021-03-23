const handlingErros = error => {
    // Error 😨 🚀
    const errorMessages = {};
    if (error.response) {
        const { data, status } = error.response;

        if (data.errors) {
            data.errors.forEach(item => {
                errorMessages[item.field] = {
                    field: item.field,
                    rule: item.rule,
                    message: item.message
                };
            });
        }
    }
    return errorMessages;
};

export default handlingErros;
