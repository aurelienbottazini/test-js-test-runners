
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 14 to equal 26', (t) => {
  assert.strictEqual(sum(12, 14), 26);
});
