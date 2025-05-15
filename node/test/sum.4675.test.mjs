
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 35 to equal 49', (t) => {
  assert.strictEqual(sum(14, 35), 49);
});
