
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 18 to equal 69', (t) => {
  assert.strictEqual(sum(51, 18), 69);
});
