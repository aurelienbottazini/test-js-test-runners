
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 10 to equal 93', (t) => {
  assert.strictEqual(sum(83, 10), 93);
});
