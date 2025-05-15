
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 51 to equal 102', (t) => {
  assert.strictEqual(sum(51, 51), 102);
});
