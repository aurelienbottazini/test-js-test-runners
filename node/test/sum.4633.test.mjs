
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 59 to equal 66', (t) => {
  assert.strictEqual(sum(7, 59), 66);
});
