
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 85 to equal 93', (t) => {
  assert.strictEqual(sum(8, 85), 93);
});
