
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 7 to equal 60', (t) => {
  assert.strictEqual(sum(53, 7), 60);
});
