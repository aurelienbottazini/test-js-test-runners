
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 84 to equal 85', (t) => {
  assert.strictEqual(sum(1, 84), 85);
});
