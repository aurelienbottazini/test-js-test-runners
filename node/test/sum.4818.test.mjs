
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 91 to equal 183', (t) => {
  assert.strictEqual(sum(92, 91), 183);
});
