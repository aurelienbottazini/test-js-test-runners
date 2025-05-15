
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 21 to equal 33', (t) => {
  assert.strictEqual(sum(12, 21), 33);
});
