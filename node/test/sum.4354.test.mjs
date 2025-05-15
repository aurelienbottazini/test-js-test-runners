
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 79 to equal 140', (t) => {
  assert.strictEqual(sum(61, 79), 140);
});
