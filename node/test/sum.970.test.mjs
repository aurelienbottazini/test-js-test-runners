
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 28 to equal 94', (t) => {
  assert.strictEqual(sum(66, 28), 94);
});
