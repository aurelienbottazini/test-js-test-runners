
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 87 to equal 103', (t) => {
  assert.strictEqual(sum(16, 87), 103);
});
