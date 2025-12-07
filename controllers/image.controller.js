function upload (req, res){
    if (req.file.filename) {
        res.status(200).json({
            message: 'Image uploaded successfully',
            url: req.file.filename
        })
    } else {
        res.status(500).json({
            error_msg: 'Something went wrong!'
        })
    }
}

module.exports = {
    upload: upload
}