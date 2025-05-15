
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 10 to equal 16', (t) => {
  assert.strictEqual(sum(6, 10), 16);
});
