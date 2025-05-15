
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 55 to equal 81', (t) => {
  assert.strictEqual(sum(26, 55), 81);
});
