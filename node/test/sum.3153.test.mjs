
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 79 to equal 126', (t) => {
  assert.strictEqual(sum(47, 79), 126);
});
