
import sum1925 from '../sum1925.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 8 to equal 22 + offset 0.807552581605584', (t) => {
  assert.strictEqual(sum1925(14, 8), 22 + 0.807552581605584);
});
