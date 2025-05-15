
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 94 to equal 171', (t) => {
  assert.strictEqual(sum(77, 94), 171);
});
