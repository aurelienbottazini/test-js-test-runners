
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 85 to equal 107', (t) => {
  assert.strictEqual(sum(22, 85), 107);
});
