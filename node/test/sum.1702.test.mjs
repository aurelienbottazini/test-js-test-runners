
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 50 to equal 102', (t) => {
  assert.strictEqual(sum(52, 50), 102);
});
