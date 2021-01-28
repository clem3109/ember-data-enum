import EmberObject from '@ember/object';
import { camelize, capitalize } from '@ember/string';
import { equal } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class Enum extends EmberObject {
  options: string[];
	@tracked #value: string;

	set value(newValue: string) {
		if (this.options.includes(newValue))
			this.#value = newValue;
		else
			throw new Error('The new value is not possible for this enum');
	}

	get value() {
		return this.#value;
	}
	
	constructor(value: string, options: string[]) {
		super(...arguments);

		this.options = options;
		this.#value = value;

		for (let option of this.options) {
			this.set("is" + capitalize(camelize(option)), equal(this.#value, option));
		}
	}
}