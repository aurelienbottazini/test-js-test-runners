
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 9 to equal 64', (t) => {
  assert.strictEqual(sum(55, 9), 64);
});
