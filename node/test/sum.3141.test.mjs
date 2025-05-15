
import sum3141 from '../sum3141.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 55 to equal 103 + offset 0.43580281988949454', (t) => {
  assert.strictEqual(sum3141(48, 55), 103 + 0.43580281988949454);
});
