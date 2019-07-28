function initData(start_num,add_num,minus_num,length) {
    let array = [];
    for (let i = 0;i<length;i++) {
        array.push(Math.round(start_num + Math.random() * add_num - minus_num))
    }
    return array;
}

module.exports = {
    initData
}