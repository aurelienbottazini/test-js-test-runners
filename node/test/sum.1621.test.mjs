
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 19 to equal 72', (t) => {
  assert.strictEqual(sum(53, 19), 72);
});
