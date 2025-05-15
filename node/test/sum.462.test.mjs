
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 3 to equal 58', (t) => {
  assert.strictEqual(sum(55, 3), 58);
});
