
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 12 to equal 66', (t) => {
  assert.strictEqual(sum(54, 12), 66);
});
