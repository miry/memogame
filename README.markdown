It is a simple game to check your memory.


## Structure of the project

* `memogame.js` - union of all compiled classes
* `/lib/*.js` - compiled files
* `/src/*.js.coffee` - sources of the project, auto each change here, `/lib/*.js` and `memogame.js` are regenerated.
* `/tests/` - test section
* `/tests/src/*_test.js.coffee` - sources of tests
* `/test/_test.js` - compiled tests
* `/test/tests.js` - union of all compiled tests

## Development

* `bundle`
* `bundle guard`

## Test

To run tests you should open in browser `tests/index.html`


## Usage

Add simple tags to the page.

```html
<preview>
  <live_board></live_board>
</preview>
```

And run script

```javascript
new Memogame().game.playRound()
```
