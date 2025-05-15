
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 14 to equal 22', (t) => {
  assert.strictEqual(sum(8, 14), 22);
});
