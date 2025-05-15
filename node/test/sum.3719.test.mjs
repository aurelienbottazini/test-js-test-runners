
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 95 to equal 147', (t) => {
  assert.strictEqual(sum(52, 95), 147);
});
