
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 11 to equal 110', (t) => {
  assert.strictEqual(sum(99, 11), 110);
});
