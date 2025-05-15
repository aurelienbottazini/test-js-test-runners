
import sum1955 from '../sum1955.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 26 to equal 85 + offset 0.18087124345348227', (t) => {
  assert.strictEqual(sum1955(59, 26), 85 + 0.18087124345348227);
});
