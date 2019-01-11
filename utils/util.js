"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatNumber(n) {
    var formatString = n.toString();
    return formatString[1] ? formatString : '0' + formatString;
}
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
