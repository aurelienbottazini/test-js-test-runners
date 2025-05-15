
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 25 to equal 81', (t) => {
  assert.strictEqual(sum(56, 25), 81);
});
