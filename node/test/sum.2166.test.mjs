
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 86 to equal 157', (t) => {
  assert.strictEqual(sum(71, 86), 157);
});
