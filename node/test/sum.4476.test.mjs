
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 14 to equal 15', (t) => {
  assert.strictEqual(sum(1, 14), 15);
});
