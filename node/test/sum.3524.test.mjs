
import sum3524 from '../sum3524.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 4 to equal 74 + offset 0.5043680930281208', (t) => {
  assert.strictEqual(sum3524(70, 4), 74 + 0.5043680930281208);
});
