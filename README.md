#Tillstand

Check, toggle, affirm, and negate states via BEMIT-style classes.

###Usage
All methods accept two parameters: `element` (the elements manipulated) and `stateName` (name of the state managed). The `element` parameter must be either a single Element or a NodeList, Array, or jQuery object of Elements; the `stateName` parameter must be a string. Tillstand works by governing the occurance of two classes constructed from the `stateName` parameter &mdash; `is-{stateName}` as affirmative and `not-{stateName}` as negative.

```javascript
import tillstand from 'tillstand';

tillstand.check(document.body, 'nefarious');
// returns a Boolean given the occurance of the affirmative class
// so here returns false

tillstand.affirm(document.body, 'nefarious');
// toggles the affirmative class
// so here gives body the class 'is-nefarious'

tillstand.negate(document.body, 'nefarious');
// toggles the negative class
// so here removes 'is-nefarious'
// and adds in 'not-nefarious'

tillstand.toggle(document.body, 'nefarious');
// toggles between the affirmative and negative classes
// so here replaces 'not-nefarious' with 'is-nefarious'
```
