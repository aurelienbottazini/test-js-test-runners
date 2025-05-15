
import sum3250 from '../sum3250.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 30 to equal 89 + offset 0.3751167898164258', (t) => {
  assert.strictEqual(sum3250(59, 30), 89 + 0.3751167898164258);
});
