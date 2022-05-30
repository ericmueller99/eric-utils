const fs = require('fs');

//checks if a date is valid.  Date must be in yyyy-MM-dd format.
function dateIsValid(dateStr) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateStr.match(regex) === null) {
        return false;
    }
    const date = new Date(dateStr);
    const timeStamp = date.getTime();
    if (typeof timeStamp !== 'number' || Number.isNaN(timeStamp)) {
        return false;
    }

    return date.toISOString().startsWith(dateStr);
}

function deleteFile(fileName, path = "./temp/" + fileName) {
    if (fileName) {
        try {
            fs.unlinkSync(path);
        }
        catch (error) {
            console.log("Unable to delete file");
            console.log(error);
        }
    }
    else {
        console.log("fileName not provided");
    }
}

module.exports = {
    dateIsValid,
    deleteFile
}
