
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 75 to equal 114', (t) => {
  assert.strictEqual(sum(39, 75), 114);
});
