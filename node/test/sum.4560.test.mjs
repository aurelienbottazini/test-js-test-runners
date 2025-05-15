
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 90 to equal 182', (t) => {
  assert.strictEqual(sum(92, 90), 182);
});
