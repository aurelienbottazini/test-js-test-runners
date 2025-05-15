
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 0 to equal 69', (t) => {
  assert.strictEqual(sum(69, 0), 69);
});
