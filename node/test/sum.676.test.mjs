
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 38 to equal 64', (t) => {
  assert.strictEqual(sum(26, 38), 64);
});
