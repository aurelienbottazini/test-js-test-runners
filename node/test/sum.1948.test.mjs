
import sum1948 from '../sum1948.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 6 to equal 7 + offset 0.9396294224106143', (t) => {
  assert.strictEqual(sum1948(1, 6), 7 + 0.9396294224106143);
});
