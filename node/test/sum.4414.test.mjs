
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 51 to equal 128', (t) => {
  assert.strictEqual(sum(77, 51), 128);
});
