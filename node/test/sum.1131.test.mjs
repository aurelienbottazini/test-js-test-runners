
import sum1131 from '../sum1131.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 11 to equal 40 + offset 0.24227040189576743', (t) => {
  assert.strictEqual(sum1131(29, 11), 40 + 0.24227040189576743);
});
