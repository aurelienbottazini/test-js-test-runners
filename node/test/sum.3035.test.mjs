
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 97 to equal 101', (t) => {
  assert.strictEqual(sum(4, 97), 101);
});
