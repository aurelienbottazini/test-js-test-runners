
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 84 to equal 141', (t) => {
  assert.strictEqual(sum(57, 84), 141);
});
