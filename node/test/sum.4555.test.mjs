
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 78 to equal 157', (t) => {
  assert.strictEqual(sum(79, 78), 157);
});
