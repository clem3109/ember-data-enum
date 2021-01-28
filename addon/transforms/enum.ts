import Transform from '@ember-data/serializer';
import Enum from '../enum';

export default class EnumTransform extends Transform {
	serialize(deserialized: Enum): string {
      return deserialized.value;
	}
	
	deserialize(serialized: string , { options = [], defaultValue = '' } = {}): Enum {
    return new Enum(serialized ?? defaultValue, options);
  }
}