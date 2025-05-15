
import sum2234 from '../sum2234.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 26 to equal 61 + offset 0.18504359630681044', (t) => {
  assert.strictEqual(sum2234(35, 26), 61 + 0.18504359630681044);
});
