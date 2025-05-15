
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 96 to equal 102', (t) => {
  assert.strictEqual(sum(6, 96), 102);
});
