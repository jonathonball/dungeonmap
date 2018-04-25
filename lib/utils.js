class Utils {

    static isTinyInt(int) {
        return (!isNaN(int) && int >= 0 && int <= 255);
    }
    
}

module.exports = Utils;
