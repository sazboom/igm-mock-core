

function IGMBaseConditionsMixin(){


	this.addCondition = function(condition){
		if(!this.hasCondition(condition.keyword)){
			this.conditions.push(condition)
		}
	}

	this.removeCondition = function(condition){
		var index = this.locateCondition(condition)	
		if (index > -1) {
		    this.conditions.splice(index, 1);
		}
	}
	this.hasCondition = function(condition){
		var index = this.locateCondition(condition)
		return(index > -1)
	}
	this.locateCondition = function(condition){
		var index = -1
		for(var i = 0, len = this.conditions.length; i < len; i++) {
		    if (this.conditions[i].keyword === condition) {
		        index = i;
		        break;
		    }
		}
		return index
	}
}


module.exports = IGMBaseConditionsMixin