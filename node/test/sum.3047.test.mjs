
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 25 to equal 69', (t) => {
  assert.strictEqual(sum(44, 25), 69);
});
