
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 3 to equal 67', (t) => {
  assert.strictEqual(sum(64, 3), 67);
});
