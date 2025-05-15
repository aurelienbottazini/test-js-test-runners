
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 4 to equal 64', (t) => {
  assert.strictEqual(sum(60, 4), 64);
});
