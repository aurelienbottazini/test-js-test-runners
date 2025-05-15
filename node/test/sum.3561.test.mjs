
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 49 to equal 60', (t) => {
  assert.strictEqual(sum(11, 49), 60);
});
