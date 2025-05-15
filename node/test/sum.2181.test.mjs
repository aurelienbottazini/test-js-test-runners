
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 0 to equal 11', (t) => {
  assert.strictEqual(sum(11, 0), 11);
});
