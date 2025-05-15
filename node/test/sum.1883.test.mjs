
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 9 to equal 50', (t) => {
  assert.strictEqual(sum(41, 9), 50);
});
