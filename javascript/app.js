const {welcome, startApp} = require('./component/common/console.file');
const {openApp} = require('./component/common/start.handle');
const {command} = require('./component/common/useApp.handle');


function app() {
    welcome();
    openApp('Press Enter to open app: ');
    console.clear();
    startApp();
    command('Type number of feature: ');
}

app();


/*Hello App này là 1 app chỉ mang tính chất demo các chức năng chứ không phải 1 app hoàn chỉnh do đó sẽ có nhiều điểm 
hiệu suất chưa được tốt nhưng suy cho cùng thì chỉ demo nên cũng không ảnh hưởng nhiều mấy đến máy*/