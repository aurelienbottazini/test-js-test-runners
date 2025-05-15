
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 28 to equal 93', (t) => {
  assert.strictEqual(sum(65, 28), 93);
});
