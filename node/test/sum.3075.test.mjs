
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 44 to equal 58', (t) => {
  assert.strictEqual(sum(14, 44), 58);
});
