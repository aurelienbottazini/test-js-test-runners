
import sum3232 from '../sum3232.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 36 to equal 69 + offset 0.14184488997674505', (t) => {
  assert.strictEqual(sum3232(33, 36), 69 + 0.14184488997674505);
});
