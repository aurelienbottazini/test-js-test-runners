
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 0 to equal 28', (t) => {
  assert.strictEqual(sum(28, 0), 28);
});
