## 安装
```sh
    git clone git@github.com:zhangleinice/react-redux-demo.git
    npm install
    npm start
```

## redux,react-redux学习，实现一个简易的redux和react-redux库

### hoc
1，高阶组件就是一个函数，传给它一个组件，它返回一个新的组件  
2，用一个容器（w）把React组件包裹，高阶组件会返回一个增强（E）的组件。高阶组件让我们的代码更具有复用性，逻辑性与抽象特。它可以对props和state进行控制，也可以对render方法进行劫持...  
3，使用场景：<br/>
（1）复用代码。抽出相同逻辑，复用通过props通信  
4，属性代理。 它通过做一些操作，将被包裹组件的props和新生成的props一起传递给此组件  
```js
    export default function withHeader(WrappedComponent) {
        return class HOC extends Component {
            render() {
            const newProps = {
                test:'hoc'
            }
            // 透传props，并且传递新的newProps
            return <div>
                <WrappedComponent {...this.props} {...newProps}/>
            </div>
            }
        }
    }
```
5，反向继承。 高阶组件继承于被包裹的React组件  
```js
    export default function (WrappedComponent) {
        return class Inheritance extends WrappedComponent {
            componentDidMount() {
                // 可以方便地得到state，做一些更深入的修改。
                console.log(this.state);
            }
            render() {
                //可以做渲染劫持
                return super.render();
            }
        }
    }
```

### context(Consumer, Provider)
1,如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，通常是一个或者多个子节点。所以Context的使用基于生产者消费者模式。  
2,对于父组件，也就是Context生产者，需要通过一个静态属性childContextTypes声明提供给子组件的Context对象的属性，并实现一个实例getChildContext方法，返回一个代表Context的纯对象 (plain object) 。  
3,而对于Context的消费者,子组件需要通过一个静态属性contextTypes声明后，才能访问父组件Context对象的属性  
4，context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。  

### Pure Function（纯函数）
1，函数的返回结果只依赖于它的参数。  
```js
    // （1）foo不是纯函数，只依赖外部变量
    const a = 1
    const foo = (b) => a + b
    foo(2) // => 3

    // （1）foo是纯函数，只依赖参数
    const foo = (x, b) => x + b
    foo(1, 2) // => 3
```
2，函数执行过程里面没有副作用。   
```js
    // （1）foo是纯函数，没有副作用
    const foo = (obj, b) => {
        return obj.x + b
    }
    const counter = { x: 1 }
    foo(counter, 2) // => 3

    // （2）foo不是纯函数，有副作用
    const foo = (obj, b) => {
        //修改了obj的值
        obj.x = 2
        return obj.x + b
    }
    const counter = { x: 1 }
    foo(counter, 2) // => 4

    // （3）foo是纯函数，没有副作用
    const foo = (b) => {
        const obj = { x: 1 }
        obj.x = 2
        return obj.x + b
    }
```
3,调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload 刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。  

4,纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。  

### redux
1，为什么要用redux？  
（1）使用context共享状态，所有子组件都可以对context进行修改，导致程序的运行不可预料。  
（2）约定所有对数据的操作必须通过 dispatch 函数。  
（3）约定reducer纯函数，使程序变得可预测。 
（4）共享结构，不能修改state。可以用immutable  

### react-redux
1，为什么用react-redux库，不直接用redux？  
（1）有大量重复的逻辑：它们基本的逻辑都是，取出 context，取出里面的 store，然后用里面的状态设置自己的状态，这些代码逻辑其实都是相同的。  
（2）对 context 依赖性过强：这些组件都要依赖 context 来取数据，使得这个组件复用性基本为零。想一下，如果别人需要用到里面的 ThemeSwitch 组件，但是他们的组件树并没有 context 也没有 store，他们没法用这个组件了。  
2，connect抽出取context的逻辑  
3，在Provider创建context，去掉组件里创建context  

### [参考react小书](http://huziketang.mangojuice.top/books/react/lesson38)






