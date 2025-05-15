
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 24 to equal 90', (t) => {
  assert.strictEqual(sum(66, 24), 90);
});
