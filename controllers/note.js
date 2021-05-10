const {NOTE} = require('../models');

function commonErrorResponse(e, res) {
    return res.status(500).json({
        status: 500,
        message: e.toString()
    });
}

exports.createNote = async function (req, res) {
    try {
        const {note} = req.body;
        if (!note) {
            return res.status(400).json({
                status: 400,
                message: "note required"
            });
        }
        const {ID_ACCOUNT} = req.user;
        const createdNote = await NOTE.create({
            NOTE: note,
            ID_ACCOUNT
        });
        return res.status(200).json({
            status: 200,
            note: createdNote
        });
    } catch (e) {
        return commonErrorResponse(e, res);
    }
};
