
import sum3282 from '../sum3282.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 6 to equal 46 + offset 0.5111153071493335', (t) => {
  assert.strictEqual(sum3282(40, 6), 46 + 0.5111153071493335);
});
