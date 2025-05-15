
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 88 to equal 144', (t) => {
  assert.strictEqual(sum(56, 88), 144);
});
