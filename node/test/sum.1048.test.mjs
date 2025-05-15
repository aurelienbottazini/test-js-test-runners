
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 47 to equal 113', (t) => {
  assert.strictEqual(sum(66, 47), 113);
});
