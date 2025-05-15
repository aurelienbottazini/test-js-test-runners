
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 22 to equal 75', (t) => {
  assert.strictEqual(sum(53, 22), 75);
});
