
import sum2148 from '../sum2148.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 24 to equal 59 + offset 0.6923239028197388', (t) => {
  assert.strictEqual(sum2148(35, 24), 59 + 0.6923239028197388);
});
