
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 3 to equal 66', (t) => {
  assert.strictEqual(sum(63, 3), 66);
});
