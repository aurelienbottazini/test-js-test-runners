
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 5 to equal 88', (t) => {
  assert.strictEqual(sum(83, 5), 88);
});
