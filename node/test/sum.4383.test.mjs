
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 45 to equal 75', (t) => {
  assert.strictEqual(sum(30, 45), 75);
});
