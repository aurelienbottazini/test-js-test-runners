
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 95 to equal 179', (t) => {
  assert.strictEqual(sum(84, 95), 179);
});
