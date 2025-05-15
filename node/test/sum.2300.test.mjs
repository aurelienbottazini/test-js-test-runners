
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 90 to equal 113', (t) => {
  assert.strictEqual(sum(23, 90), 113);
});
