
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 31 to equal 69', (t) => {
  assert.strictEqual(sum(38, 31), 69);
});
