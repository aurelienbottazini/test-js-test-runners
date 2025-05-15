
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 40 to equal 114', (t) => {
  assert.strictEqual(sum(74, 40), 114);
});
