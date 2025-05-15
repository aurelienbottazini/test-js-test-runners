
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 81 to equal 164', (t) => {
  assert.strictEqual(sum(83, 81), 164);
});
