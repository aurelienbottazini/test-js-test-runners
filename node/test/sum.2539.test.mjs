
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 21 to equal 89', (t) => {
  assert.strictEqual(sum(68, 21), 89);
});
