
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 80 to equal 105', (t) => {
  assert.strictEqual(sum(25, 80), 105);
});
