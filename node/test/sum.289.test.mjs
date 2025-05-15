
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 70 to equal 102', (t) => {
  assert.strictEqual(sum(32, 70), 102);
});
