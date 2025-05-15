
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 37 to equal 38', (t) => {
  assert.strictEqual(sum(1, 37), 38);
});
