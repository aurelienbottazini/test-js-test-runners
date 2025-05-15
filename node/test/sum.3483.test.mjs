
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 21 to equal 35', (t) => {
  assert.strictEqual(sum(14, 21), 35);
});
