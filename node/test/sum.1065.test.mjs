
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 71 to equal 157', (t) => {
  assert.strictEqual(sum(86, 71), 157);
});
