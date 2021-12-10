import InvalidRequestError from "../../errors/InvalidRequestError.js";

function errorHandler(err, req, res, next) {
    let err_msg
    if (err instanceof InvalidRequestError) {
        err_msg = {"error":"bad request"}
        res.status(400)
    } else {
        err_msg = {"error":"server error"}
        res.status(500)
    }
    res.json(err_msg)
    console.log(err)
}

export default errorHandler