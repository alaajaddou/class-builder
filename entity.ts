/**
 * @abstract Creates a dynamic instance of a dynamically created attribute set.
 * 
 * @author Alaa M. Jaddou
 *
 * @see https://github.com/alaajaddou/class-builder
 */
class Entity {
	private _template;
	private _entity_id;
	
	constructor(data) {
		Object.keys(data).forEach(key => {
			this.set(key, data[key]);
		});
	}
	
	get entity_id() {
		return this._entity_id;
	}
	
	set entity_id(entity_id) {
		this._entity_id = entity_id;		
	}
	
	get template() {
		return this._template;
	}
	
	set template(template) {
		this._template = template;		
	}

	get(field: string) {
		return this['_' + field];
	}

	set(field: string, value: any) {
		this['_' + field] = value;
	}

	has(field: string) {
		return this[field] !== undefined;
	}
}
