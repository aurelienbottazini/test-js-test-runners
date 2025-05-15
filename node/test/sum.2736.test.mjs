
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 47 to equal 61', (t) => {
  assert.strictEqual(sum(14, 47), 61);
});
