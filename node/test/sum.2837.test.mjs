
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 10 to equal 51', (t) => {
  assert.strictEqual(sum(41, 10), 51);
});
