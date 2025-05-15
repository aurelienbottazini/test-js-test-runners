
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 87 to equal 157', (t) => {
  assert.strictEqual(sum(70, 87), 157);
});
