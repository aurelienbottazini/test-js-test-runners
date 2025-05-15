
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 81 to equal 173', (t) => {
  assert.strictEqual(sum(92, 81), 173);
});
