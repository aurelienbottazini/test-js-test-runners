
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 34 to equal 90', (t) => {
  assert.strictEqual(sum(56, 34), 90);
});
