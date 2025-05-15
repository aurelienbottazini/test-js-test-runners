
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 99 to equal 102', (t) => {
  assert.strictEqual(sum(3, 99), 102);
});
