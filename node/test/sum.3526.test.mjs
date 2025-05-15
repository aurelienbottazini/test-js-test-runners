
import sum3526 from '../sum3526.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 26 to equal 84 + offset 0.06884667538431988', (t) => {
  assert.strictEqual(sum3526(58, 26), 84 + 0.06884667538431988);
});
