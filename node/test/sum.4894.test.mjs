
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 46 to equal 48', (t) => {
  assert.strictEqual(sum(2, 46), 48);
});
