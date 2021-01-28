ember-data-enum
==============================================================================

This addon provides a very simple abstraction to use enum attributes with ember data.
This addon has been very inspired by https://github.com/rmachielse/ember-enum


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-data-enum
```


Usage
------------------------------------------------------------------------------

You can define an enum attribute as follows:

```javascript
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  status: attr('enum', {
    options: [
      'started',
      'stopped'
    ],
    defaultValue: 'started'
  })
});
```

The value from the json response is expected to be a string.
Now you can use the attribute in templates:

```handlebars
{{model.status.value}}
```

You can also use boolean methods to check if the enum has a certain value:

```handlebars
{{#if model.status.isStarted}}
  Started!
{{/if}}
```

You can use a select element like this:

```handlebars
<select value={{model.status.value}} onchange={{action (mut model.status.value) value="target.value"}}>
  {{#each model.status.options as |option|}}
    <option value={{option}}>{{option}}</option>
  {{/each}}
</select>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
