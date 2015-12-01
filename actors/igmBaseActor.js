

function IGMBaseActor(options){
	this.calculateBonus = function(attr){
		return Math.floor((this.attributes[attr] - 10)/2)
	}

	this.calculateAttackValue = function(){
		return Math.floor(Math.random()*19+1+this.attackBonus)
	}

	this.calculateSave = function(options){
		var save = Math.floor(Math.random()*19+1)
		save += this.calculateBonus(this.attributes[options.spellSaveAttr])
		return save
	}
	
	this.calculateHitAvoidance = function(){
		this.hitAvoidance = this.hitAvoidance || 10
		return this.hitAvoidance 
	}

	this.adjustDamageValue = function(damage){
		return damage - this.damageModification;
	}
	this.applyDamage = function(damage){
		this.healthValue = this.healthValue - damage;
	}

	this.calculateInitiative = function(){
		return Math.floor((Math.random() * 19) + 1)
	}

	this.move = function(pos){
		this.position = pos
	} 

}


module.exports = IGMBaseActor