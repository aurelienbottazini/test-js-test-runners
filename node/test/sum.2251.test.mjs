
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 12 to equal 61', (t) => {
  assert.strictEqual(sum(49, 12), 61);
});
