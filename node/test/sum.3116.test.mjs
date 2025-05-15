
import sum3116 from '../sum3116.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 35 to equal 57 + offset 0.2523453402189234', (t) => {
  assert.strictEqual(sum3116(22, 35), 57 + 0.2523453402189234);
});
