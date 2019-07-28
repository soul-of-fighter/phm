const fs = require('fs');
const dataUtils = require('../util/data_util');

function createHome() {
    let titles = ['去年', '今年'];
    // let date = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    let date = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

    //缺陷
    let defects = [];
    //故障
    let breakdowns = [];
    //中断供电
    let break_sets = [];
    //维修
    let repairs = [];

    titles.forEach(function (title) {
        let defect = {};
        defect.title = title;
        defect.type = 'line';
        defect.smooth = true;
        defect.data = dataUtils.initData(12, 3, 1,12);
        defects.push(defect);

        let breakdown = {};
        breakdown.title = title;
        breakdown.type = 'line';
        breakdown.smooth = true;
        breakdown.data = dataUtils.initData(12, 3, 1,12);
        breakdowns.push(defect);

        let break_set = {};
        break_set.title = title;
        break_set.type = 'line';
        break_set.smooth = true;
        break_set.data = dataUtils.initData(12, 3, 1,12);
        break_sets.push(defect);

        let repair = {};
        repair.title = title;
        repair.type = 'line';
        repair.smooth = true;
        repair.data = dataUtils.initData(12, 3, 1,12);
        repairs.push(defect);
    });

    let result = {};
    result.titles = titles;
    result.date = date;
    result.defects = defects;
    result.breakdowns=breakdowns;
    result.break_sets=break_sets;
    result.repairs=repairs;

    fs.writeFileSync(__dirname + '/home.json','/* https://echarts.baidu.com/examples/editor.html?c=line-simple */ \r\n');
    fs.appendFileSync(__dirname + '/home.json', JSON.stringify(result));
}

module.exports = {
    createHome
}