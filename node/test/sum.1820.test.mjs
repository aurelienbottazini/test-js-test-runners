
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 67 to equal 157', (t) => {
  assert.strictEqual(sum(90, 67), 157);
});
