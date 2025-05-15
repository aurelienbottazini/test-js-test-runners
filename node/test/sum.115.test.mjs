
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 92 to equal 173', (t) => {
  assert.strictEqual(sum(81, 92), 173);
});
