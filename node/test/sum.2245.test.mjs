
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 18 to equal 74', (t) => {
  assert.strictEqual(sum(56, 18), 74);
});
