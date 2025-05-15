
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 77 to equal 144', (t) => {
  assert.strictEqual(sum(67, 77), 144);
});
