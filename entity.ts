/**
 * @description Creates a dynamic class signature.
 *
 * @author Alaa M. Jaddou
 * @since June 2021
 * @see https://github.com/alaajaddou/class-builder
 */
class Entity {
	constructor(data) {
		Object.keys(data).forEach(key => {
			this.set(key, data[key]);
		});
	}

	private _template;

	get template() {
		return this._template;
	}

	set template(template) {
		this._template = template;
	}

	private _entity_id;

	get entity_id() {
		return this._entity_id;
	}

	set entity_id(entity_id) {
		this._entity_id = entity_id;
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
