
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 54 to equal 117', (t) => {
  assert.strictEqual(sum(63, 54), 117);
});
