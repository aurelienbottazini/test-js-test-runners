
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 53 to equal 102', (t) => {
  assert.strictEqual(sum(49, 53), 102);
});
