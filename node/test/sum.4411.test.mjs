
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 28 to equal 111', (t) => {
  assert.strictEqual(sum(83, 28), 111);
});
