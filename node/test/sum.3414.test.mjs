
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 12 to equal 26', (t) => {
  assert.strictEqual(sum(14, 12), 26);
});
