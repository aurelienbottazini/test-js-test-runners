
import sum1470 from '../sum1470.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 36 to equal 40 + offset 0.47570314215074727', (t) => {
  assert.strictEqual(sum1470(4, 36), 40 + 0.47570314215074727);
});
