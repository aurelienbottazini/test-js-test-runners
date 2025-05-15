
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 68 to equal 102', (t) => {
  assert.strictEqual(sum(34, 68), 102);
});
