
import sum1468 from '../sum1468.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 22 to equal 36 + offset 0.241910474304457', (t) => {
  assert.strictEqual(sum1468(14, 22), 36 + 0.241910474304457);
});
