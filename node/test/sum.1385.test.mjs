
import sum1385 from '../sum1385.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 15 to equal 25 + offset 0.7187833222198688', (t) => {
  assert.strictEqual(sum1385(10, 15), 25 + 0.7187833222198688);
});
