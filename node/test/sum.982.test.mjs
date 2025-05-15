
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 4 to equal 72', (t) => {
  assert.strictEqual(sum(68, 4), 72);
});
