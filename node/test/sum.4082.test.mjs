
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 53 to equal 61', (t) => {
  assert.strictEqual(sum(8, 53), 61);
});
