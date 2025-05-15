
import sum3607 from '../sum3607.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 81 to equal 179 + offset 0.9069778646801266', (t) => {
  assert.strictEqual(sum3607(98, 81), 179 + 0.9069778646801266);
});
