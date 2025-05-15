
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 63 to equal 117', (t) => {
  assert.strictEqual(sum(54, 63), 117);
});
