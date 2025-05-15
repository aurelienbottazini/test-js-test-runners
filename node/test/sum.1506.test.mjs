
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 85 to equal 141', (t) => {
  assert.strictEqual(sum(56, 85), 141);
});
