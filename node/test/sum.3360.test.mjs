
import sum3360 from '../sum3360.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 97 to equal 140 + offset 0.18150743547291137', (t) => {
  assert.strictEqual(sum3360(43, 97), 140 + 0.18150743547291137);
});
