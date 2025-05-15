
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 62 to equal 64', (t) => {
  assert.strictEqual(sum(2, 62), 64);
});
