
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 23 to equal 35', (t) => {
  assert.strictEqual(sum(12, 23), 35);
});
