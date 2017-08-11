import React,{Component} from 'react';
import '../../styles/appleItem.scss';

class AppleItem extends Component {
    costructor(props){
    }
    render() {
        let {apple,eatApple}=this.props
        return (
            <div className="appleItem">
                <div className="apple"><img src="../images/apple.png" alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {apple.id}号</div>
                    <div className="weight">{apple.weight}克</div>
                </div>
                <div className="btn-div" onClick={eatApple.bind(this, apple.id)}><button data-key={apple.id}>吃掉</button></div>
            </div>
        );

    }
}
AppleItem.propTypes = {
    eatApple: React.PropTypes.func.isRequired,  
    apple: React.PropTypes.object.isRequired  
};

export default AppleItem;