
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 4 to equal 13', (t) => {
  assert.strictEqual(sum(9, 4), 13);
});
