
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 47 to equal 72', (t) => {
  assert.strictEqual(sum(25, 47), 72);
});
