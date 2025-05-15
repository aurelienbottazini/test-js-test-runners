
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 74 to equal 114', (t) => {
  assert.strictEqual(sum(40, 74), 114);
});
