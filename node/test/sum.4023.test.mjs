
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 28 to equal 64', (t) => {
  assert.strictEqual(sum(36, 28), 64);
});
