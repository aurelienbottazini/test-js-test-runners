
import sum1915 from '../sum1915.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 2 to equal 49 + offset 0.9590329576016583', (t) => {
  assert.strictEqual(sum1915(47, 2), 49 + 0.9590329576016583);
});
