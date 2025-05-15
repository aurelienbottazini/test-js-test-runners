
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 50 to equal 88', (t) => {
  assert.strictEqual(sum(38, 50), 88);
});
