
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 55 to equal 75', (t) => {
  assert.strictEqual(sum(20, 55), 75);
});
