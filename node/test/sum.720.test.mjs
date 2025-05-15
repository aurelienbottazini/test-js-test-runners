
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 98 to equal 135', (t) => {
  assert.strictEqual(sum(37, 98), 135);
});
