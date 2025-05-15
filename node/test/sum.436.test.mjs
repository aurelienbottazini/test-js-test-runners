
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 81 to equal 111', (t) => {
  assert.strictEqual(sum(30, 81), 111);
});
