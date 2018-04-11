# zType
A light weight javascript type-writer effect

# Usage
zType runs by using data supplied from `ztype-data` attribute found in any html element.

zType constructor has two parameters `element` and `duration`. `element` is the element that contains the `ztype-data` attribute. `duration` is the speed of the text effect.

By default, `element` selects the first element that contains the attribute `ztype-data`. `duration` is set to `2000`.
#### Javacript
```javascript
new zType()
```
#### HTML
```html
<span ztype-data='["Hi, I am Mark.", "And this is zType."]'></span>
```
