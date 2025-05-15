
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 67 to equal 161', (t) => {
  assert.strictEqual(sum(94, 67), 161);
});
