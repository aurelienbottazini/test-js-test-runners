
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 60 to equal 61', (t) => {
  assert.strictEqual(sum(1, 60), 61);
});
