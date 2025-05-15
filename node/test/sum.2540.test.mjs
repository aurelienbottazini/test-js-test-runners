
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 54 to equal 61', (t) => {
  assert.strictEqual(sum(7, 54), 61);
});
