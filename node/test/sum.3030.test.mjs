
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 25 to equal 51', (t) => {
  assert.strictEqual(sum(26, 25), 51);
});
