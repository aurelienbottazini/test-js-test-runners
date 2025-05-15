
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 16 to equal 72', (t) => {
  assert.strictEqual(sum(56, 16), 72);
});
