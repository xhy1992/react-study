import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions  from '../actions/appleAction';
import AppleItem from './AppleItem';
import '../../styles/appleBasket.scss';

class AppleBusket extends Component {
  constructor(props){
    super(props);
  }
  appWeight(){
    let status={
        eaten:{
            quantity:0,
            weight:0
        },
        now:{
            quantity:0,
            weight:0
        }
    }
    this.props.appleList.apples.map(item=>{
        let selector=item.isEaten?"eaten":"now";
        status[selector].quantity ++;
        status[selector].weight +=item.weight;
    })
    return status;
  };
  getAppleItem(apples){
    let data=[];
        apples.forEach(apple=>{
            if(!apple.isEaten){
                data.push(<AppleItem  apple={apple} eatApple={this.props.actions.eatApple} key={apple.id}/>)
            }
        })
        if(data.length<1){
            data.push(<div className="empty-tip">苹果篮子空空如也</div>)
        }
    return data;
  }
  render(){
    let { appleList ,actions } =this.props;
    let { apples, isPicking} = appleList;
    let status=this.appWeight();
    let{
        eaten:{
            quantity:eatenQuantity,
            weight:eatenWeight
        },
        now:{
            quantity:nowQuantity,
            weight:nowWeight
        }
    }=status
    return (
        <div className="appleBusket">
            <div className="title">苹果篮子</div>
            
            <div className="stats">
                <div className="section">
                    <div className="head">当前</div>
                    <div className="content">{nowQuantity}个苹果，{nowWeight}克</div>
                </div>
                <div className="section">
                    <div className="head">已吃掉</div>
                    <div className="content">{eatenQuantity}个苹果，{eatenWeight}克</div>
                </div>            
            </div>
                        
            <div className="appleList">
                {this.getAppleItem(apples)}
                
            </div> 
            <div className="btn-div">
                <button className={isPicking ? 'disabled' : ''}  onClick={actions.pickApple}>摘苹果</button>
            </div>
        
        </div>
    );
  }

}
const mapAppleData =(state) => ({
     appleList:state.appleBasket
})
//通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）
const mapActionCreators = (dispatch) =>({
    actions:bindActionCreators(actions,dispatch)
    
})
export default connect(mapAppleData,mapActionCreators)(AppleBusket);
