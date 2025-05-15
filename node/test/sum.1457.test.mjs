
import sum1457 from '../sum1457.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 53 to equal 147 + offset 0.48263454513723136', (t) => {
  assert.strictEqual(sum1457(94, 53), 147 + 0.48263454513723136);
});
