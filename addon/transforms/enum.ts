import Transform from '@ember-data/serializer';
import Enum from '../enum';

export default class EnumTransform extends Transform {
	serialize(deserialized: Enum) {
      return deserialized.value;
	}
	
	deserialize(serialized: string , { options = [], defaultValue = null } = {}) {
    return new Enum(serialized ?? defaultValue, options);
  }
}