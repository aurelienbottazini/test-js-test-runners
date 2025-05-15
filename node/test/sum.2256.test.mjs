
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 47 to equal 110', (t) => {
  assert.strictEqual(sum(63, 47), 110);
});
