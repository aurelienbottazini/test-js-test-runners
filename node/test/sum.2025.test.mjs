
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 95 to equal 135', (t) => {
  assert.strictEqual(sum(40, 95), 135);
});
