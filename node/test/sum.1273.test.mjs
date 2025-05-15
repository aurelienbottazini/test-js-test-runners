
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 77 to equal 174', (t) => {
  assert.strictEqual(sum(97, 77), 174);
});
