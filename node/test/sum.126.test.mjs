
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 12 to equal 69', (t) => {
  assert.strictEqual(sum(57, 12), 69);
});
