
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 19 to equal 90', (t) => {
  assert.strictEqual(sum(71, 19), 90);
});
