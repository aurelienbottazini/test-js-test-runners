
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 85 to equal 183', (t) => {
  assert.strictEqual(sum(98, 85), 183);
});
