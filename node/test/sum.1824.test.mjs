
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 23 to equal 60', (t) => {
  assert.strictEqual(sum(37, 23), 60);
});
