
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 28 to equal 75', (t) => {
  assert.strictEqual(sum(47, 28), 75);
});
