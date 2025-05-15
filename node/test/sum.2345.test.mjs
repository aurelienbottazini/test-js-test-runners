
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 10 to equal 61', (t) => {
  assert.strictEqual(sum(51, 10), 61);
});
