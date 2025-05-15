
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 30 to equal 105', (t) => {
  assert.strictEqual(sum(75, 30), 105);
});
