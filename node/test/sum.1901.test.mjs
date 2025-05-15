
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 33 to equal 101', (t) => {
  assert.strictEqual(sum(68, 33), 101);
});
