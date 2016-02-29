#Tillstand

Check, toggle, affirm, and negate states via BEMIT-style classes.

###Usage
All methods accept two parameters: `element` (the elements manipulated) and `stateName` (name of the state managed). The `element` parameter must be either a single Element or a NodeList, Array, or jQuery object of Elements; the `stateName` parameter must be a string. Tillstand works by governing the occurance of two classes constructed from the `stateName` parameter &mdash; `is-{stateName}` as affirmative and `not-{stateName}` as negative.
####Methods
**check**: returns a Boolean given the occurance of an affirmative class.

**toggle**: toggles between the affirmative and negative classes

**affirm**: toggles the affirmative class

**negate**: toggles the negative class
