
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 63 to equal 66', (t) => {
  assert.strictEqual(sum(3, 63), 66);
});
