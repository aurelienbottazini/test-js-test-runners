
import sum3395 from '../sum3395.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 9 to equal 16 + offset 0.3850828892072202', (t) => {
  assert.strictEqual(sum3395(7, 9), 16 + 0.3850828892072202);
});
