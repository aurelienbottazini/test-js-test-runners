
import sum3637 from '../sum3637.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 74 to equal 109 + offset 0.04610203905878252', (t) => {
  assert.strictEqual(sum3637(35, 74), 109 + 0.04610203905878252);
});
