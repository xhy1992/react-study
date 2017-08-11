 let actions = {
 	pickApple: function() {
 		return function(dispatch, getState) {
 			const state = getState();
 			if (getState().appleBasket.isPicking) {
 				return;
 			}
 			dispatch(actions.beginPickApple());
 			setTimeout(() => {
 					let weight = Math.floor(200 + Math.random() * 50);
 					dispatch(actions.donePickApple(weight))
 				}, 1000)
 				/*fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
                .then(res => {
                    if (res.status != 200) dispatch(actions.failPickApple(res.statusText));

                    //备注这里的url只是测试用的，这个是之前hackernews的api, 这里只是确保接口是通的，至于数据还是自己mock 
                    let weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));

                }).catch(e => {
                dispatch(actions.failPickApple(e.statusText));
            });*/
 		}
 	},
 	beginPickApple: () => ({
 		type: "BEGIN_PICK_APPLE"
 	}),
 	donePickApple: weight => ({
 		type: "DONE_PICK_APPLE",
 		payload: weight
 	}),
 	failPickApple: mes => ({
 		type: "FAIL_PICK_APPLE",
 		payload: new Error(mes),
 		error: true
 	}),
 	eatApple: id => ({
 		type: "EAT_APPLE",
 		payload: id
 	})

 };
 export default actions;