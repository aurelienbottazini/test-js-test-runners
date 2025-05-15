
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 19 to equal 24', (t) => {
  assert.strictEqual(sum(5, 19), 24);
});
