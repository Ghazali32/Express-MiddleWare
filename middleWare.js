
const middleWare = (req,res,next) => {
    const timestamp = new Date().toISOString(); //Using the Date function here to calculate the time the middleware was active
    const method = req.method;
    const url = req.originalUrl;
    const token = req.headers.authorization || 'No Token';

    console.log(`[${timestamp}] method : ${method} , url : ${url} , AccessToken: "${token}"`);
    next();
}

module.exports = middleWare
