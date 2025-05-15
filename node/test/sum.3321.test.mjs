
import sum3321 from '../sum3321.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 56 to equal 151 + offset 0.4879123000945106', (t) => {
  assert.strictEqual(sum3321(95, 56), 151 + 0.4879123000945106);
});
