LazyMan("Tony");
// Hi I am Tony

LazyMan("Tony")
  .sleep(10)
  .eat("lunch");
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan("Tony")
  .eat("lunch")
  .sleep(10)
  .eat("dinner");
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(10)
  .eat("junk food");
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

class LazyManClass {
  constructor(name) {
    this.taskList = [];
    console.log(`Hi I am ${name}`);
    // 整个调用链定义完后在开始执行
    setTimeout(() => {
      this.next();
    }, 0);
  }

  eat = name => {
    const fn = (name => () => {
      console.log(`I am eating ${name}`);
      this.next();
    })(name);
    this.taskList.push(fn);
    return this;
  };

  sleep = time => {
    const fn = (time => () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time * 1000);
    })(time);
    this.taskList.push(fn);
    return this;
  };

  sleepFirst = time => {
    const fn = (time => () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time * 1000);
    })(time);
    this.taskList.unshift(fn);
    return this;
  };

  next = () => {
    var fn = this.taskList.shift();
    fn && fn();
  };
}

const LazyMan = name => new LazyManClass(name);
