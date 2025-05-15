
import sum3719 from '../sum3719.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 63 to equal 123 + offset 0.51906761405185', (t) => {
  assert.strictEqual(sum3719(60, 63), 123 + 0.51906761405185);
});
