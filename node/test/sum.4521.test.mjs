
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 79 to equal 119', (t) => {
  assert.strictEqual(sum(40, 79), 119);
});
