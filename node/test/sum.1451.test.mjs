
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 95 to equal 113', (t) => {
  assert.strictEqual(sum(18, 95), 113);
});
