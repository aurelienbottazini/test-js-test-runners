
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 77 to equal 128', (t) => {
  assert.strictEqual(sum(51, 77), 128);
});
