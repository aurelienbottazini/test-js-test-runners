
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 41 to equal 135', (t) => {
  assert.strictEqual(sum(94, 41), 135);
});
