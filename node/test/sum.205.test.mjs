
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 8 to equal 15', (t) => {
  assert.strictEqual(sum(7, 8), 15);
});
