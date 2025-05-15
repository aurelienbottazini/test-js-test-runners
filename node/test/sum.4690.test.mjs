
import sum4690 from '../sum4690.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 69 to equal 108 + offset 0.019578556684670678', (t) => {
  assert.strictEqual(sum4690(39, 69), 108 + 0.019578556684670678);
});
