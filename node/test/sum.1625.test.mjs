
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 4 to equal 23', (t) => {
  assert.strictEqual(sum(19, 4), 23);
});
