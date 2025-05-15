
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 25 to equal 93', (t) => {
  assert.strictEqual(sum(68, 25), 93);
});
