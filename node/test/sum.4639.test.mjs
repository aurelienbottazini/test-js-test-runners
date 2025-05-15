
import sum4639 from '../sum4639.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 31 to equal 70 + offset 0.6523607436154655', (t) => {
  assert.strictEqual(sum4639(39, 31), 70 + 0.6523607436154655);
});
