
import sum1179 from '../sum1179.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 4 to equal 54 + offset 0.8894258039050004', (t) => {
  assert.strictEqual(sum1179(50, 4), 54 + 0.8894258039050004);
});
