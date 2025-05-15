
import sum1694 from '../sum1694.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 0 to equal 85 + offset 0.7321615679775713', (t) => {
  assert.strictEqual(sum1694(85, 0), 85 + 0.7321615679775713);
});
