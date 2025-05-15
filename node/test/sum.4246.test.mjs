
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 41 to equal 69', (t) => {
  assert.strictEqual(sum(28, 41), 69);
});
