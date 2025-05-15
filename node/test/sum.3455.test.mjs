
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 6 to equal 102', (t) => {
  assert.strictEqual(sum(96, 6), 102);
});
