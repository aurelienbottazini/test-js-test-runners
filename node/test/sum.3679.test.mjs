
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 30 to equal 122', (t) => {
  assert.strictEqual(sum(92, 30), 122);
});
