
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 50 to equal 86', (t) => {
  assert.strictEqual(sum(36, 50), 86);
});
