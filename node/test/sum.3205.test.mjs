
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 21 to equal 102', (t) => {
  assert.strictEqual(sum(81, 21), 102);
});
