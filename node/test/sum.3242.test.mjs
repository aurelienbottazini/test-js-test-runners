
import sum3242 from '../sum3242.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 17 to equal 36 + offset 0.8863567097615138', (t) => {
  assert.strictEqual(sum3242(19, 17), 36 + 0.8863567097615138);
});
