
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 34 to equal 100', (t) => {
  assert.strictEqual(sum(66, 34), 100);
});
