
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 7 to equal 13', (t) => {
  assert.strictEqual(sum(6, 7), 13);
});
