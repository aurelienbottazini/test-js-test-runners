
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 40 to equal 101', (t) => {
  assert.strictEqual(sum(61, 40), 101);
});
