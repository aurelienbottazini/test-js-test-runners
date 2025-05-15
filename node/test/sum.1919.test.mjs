
import sum1919 from '../sum1919.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 23 to equal 117 + offset 0.43922313802439983', (t) => {
  assert.strictEqual(sum1919(94, 23), 117 + 0.43922313802439983);
});
