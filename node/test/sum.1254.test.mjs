
import sum1254 from '../sum1254.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 92 to equal 160 + offset 0.7696984444675212', (t) => {
  assert.strictEqual(sum1254(68, 92), 160 + 0.7696984444675212);
});
