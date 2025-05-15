
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 47 to equal 82', (t) => {
  assert.strictEqual(sum(35, 47), 82);
});
