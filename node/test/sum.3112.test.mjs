
import sum3112 from '../sum3112.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 55 to equal 91 + offset 0.32949179736344225', (t) => {
  assert.strictEqual(sum3112(36, 55), 91 + 0.32949179736344225);
});
