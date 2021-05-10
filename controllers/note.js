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

exports.getAllNotes = async function (req, res) {
    try {
        const {ID_ACCOUNT} = req.user;
        const notes = await NOTE.findAll({where: {ID_ACCOUNT}});
        return res.status(200).json({
            status: 200,
            notes
        });
    } catch (e) {
        return commonErrorResponse(e, res);
    }
};

exports.getNote = async function (req, res) {
    try {
        const {id_note} = req.params;
        if (!id_note) {
            return res.status(400).json({
                status: 400,
                message: "id note required"
            });
        }
        const note = await NOTE.findOne({where: {ID_NOTE: id_note}});
        if (note) {
            return res.status(200).json({
                status: 200,
                note
            });
        }
        return res.status(404).json({
            status: 404,
            message: "Can't find note with that id"
        });
    } catch (e) {
        return commonErrorResponse(e, res);
    }
};
