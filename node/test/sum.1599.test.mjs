
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 13 to equal 49', (t) => {
  assert.strictEqual(sum(36, 13), 49);
});
