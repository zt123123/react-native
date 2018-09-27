export const timeFormate= function (time) {
    //0001-01-01T00:00:00Z
    return time.substring(0,time.indexOf("T"))
}