
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 94 to equal 135', (t) => {
  assert.strictEqual(sum(41, 94), 135);
});
