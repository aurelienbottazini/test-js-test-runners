
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 24 to equal 61', (t) => {
  assert.strictEqual(sum(37, 24), 61);
});
