
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 5 to equal 13', (t) => {
  assert.strictEqual(sum(8, 5), 13);
});
