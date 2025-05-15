
import sum1292 from '../sum1292.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 94 to equal 111 + offset 0.09614071341407693', (t) => {
  assert.strictEqual(sum1292(17, 94), 111 + 0.09614071341407693);
});
