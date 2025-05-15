
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 49 to equal 90', (t) => {
  assert.strictEqual(sum(41, 49), 90);
});
