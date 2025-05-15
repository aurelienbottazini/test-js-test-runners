
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 1 to equal 61', (t) => {
  assert.strictEqual(sum(60, 1), 61);
});
