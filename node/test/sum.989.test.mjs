
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 5 to equal 16', (t) => {
  assert.strictEqual(sum(11, 5), 16);
});
