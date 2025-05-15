
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 7 to equal 35', (t) => {
  assert.strictEqual(sum(28, 7), 35);
});
