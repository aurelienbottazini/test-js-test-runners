
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 63 to equal 144', (t) => {
  assert.strictEqual(sum(81, 63), 144);
});
