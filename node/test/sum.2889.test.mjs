
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 8 to equal 56', (t) => {
  assert.strictEqual(sum(48, 8), 56);
});
