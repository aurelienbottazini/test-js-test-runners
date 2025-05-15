
import sum3253 from '../sum3253.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 64 to equal 93 + offset 0.7008274043117731', (t) => {
  assert.strictEqual(sum3253(29, 64), 93 + 0.7008274043117731);
});
