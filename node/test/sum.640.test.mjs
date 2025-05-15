
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 28 to equal 50', (t) => {
  assert.strictEqual(sum(22, 28), 50);
});
