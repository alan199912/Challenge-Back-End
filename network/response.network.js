exports.success = (req, res, message, status) => {
    
    let statusCode = status || 200;
    let statusMessage = message || '';
    
    res.status(status).send({
        error: false,
        status: status,
        body: message,
    });

}

exports.error = (req, res, message, status, details) => {
    console.log(details)
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';

    res.status(statusCode).send({
        error: true,
        status: status,
        body: message,
    });
    
}
