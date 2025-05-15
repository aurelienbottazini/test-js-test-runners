
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 46 to equal 52', (t) => {
  assert.strictEqual(sum(6, 46), 52);
});
