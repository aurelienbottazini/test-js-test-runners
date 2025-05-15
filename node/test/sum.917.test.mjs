
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 95 to equal 187', (t) => {
  assert.strictEqual(sum(92, 95), 187);
});
