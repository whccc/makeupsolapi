module.exports = {
  objResponse (blnState, strData) {
    return {
      Success: blnState,
      Result: strData
    }
  },
  ValidateData (strData) {
    if (strData === undefined) {
      return true
    } else if (strData.trim() === '') {
      return true
    } else {
      return false
    }
  }
}
