import { attr } from '@ember-data/model';
import Enum from '../enum';

export default ({ options = [], defaultValue = '' } = {}) => attr('enum', {
    options,
    defaultValue: () => new Enum(defaultValue, options)
  });