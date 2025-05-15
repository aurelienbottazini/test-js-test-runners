
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 14 to equal 69', (t) => {
  assert.strictEqual(sum(55, 14), 69);
});
