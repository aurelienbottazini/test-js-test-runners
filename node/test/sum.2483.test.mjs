
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 46 to equal 114', (t) => {
  assert.strictEqual(sum(68, 46), 114);
});
