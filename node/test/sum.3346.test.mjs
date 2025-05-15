
import sum3346 from '../sum3346.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 2 to equal 10 + offset 0.3578614341925547', (t) => {
  assert.strictEqual(sum3346(8, 2), 10 + 0.3578614341925547);
});
