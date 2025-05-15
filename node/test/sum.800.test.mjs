
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 11 to equal 15', (t) => {
  assert.strictEqual(sum(4, 11), 15);
});
