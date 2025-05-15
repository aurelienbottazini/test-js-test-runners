
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 60 to equal 64', (t) => {
  assert.strictEqual(sum(4, 60), 64);
});
