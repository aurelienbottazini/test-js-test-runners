
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 67 to equal 102', (t) => {
  assert.strictEqual(sum(35, 67), 102);
});
