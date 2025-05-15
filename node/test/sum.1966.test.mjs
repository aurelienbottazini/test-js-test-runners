
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 61 to equal 135', (t) => {
  assert.strictEqual(sum(74, 61), 135);
});
