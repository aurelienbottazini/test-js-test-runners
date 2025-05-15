
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 20 to equal 69', (t) => {
  assert.strictEqual(sum(49, 20), 69);
});
