success_jsonpCallback({
	"99bill" : { //快钱支付
		"_prv" : ["33"/*浙江*/,"51"/*四川*/,"37"/*山东*/,"44"/*广东*/,"13"/*河北*/,"32"/*江苏*/,"42"/*湖北*/,"21"/*辽宁*/,"43"/*湖南*/,"35"/*福建*/], //开通的省份
		"_pro" : [],//只开通当前省份的部分城市
		"_file" : ["430100"/*长沙*/] //不开通当前省份的城市
	},
	"payeco" : {//易联语音支付
		"_prv" : ["21"/*辽宁*/], //不开通的省份
		"_pro" : [],//不开通当前省份的部分城市
		"_file" : ["210100","210200"] //开通当前省份的城市
	}
});
