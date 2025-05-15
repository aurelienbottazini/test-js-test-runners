
import sum3683 from '../sum3683.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 36 to equal 98 + offset 0.9643667977876701', (t) => {
  assert.strictEqual(sum3683(62, 36), 98 + 0.9643667977876701);
});
