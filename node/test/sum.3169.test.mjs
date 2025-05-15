
import sum3169 from '../sum3169.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 32 to equal 76 + offset 0.7412920733157125', (t) => {
  assert.strictEqual(sum3169(44, 32), 76 + 0.7412920733157125);
});
