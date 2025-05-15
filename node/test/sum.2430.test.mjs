
import sum2430 from '../sum2430.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 68 to equal 87 + offset 0.011824561710794046', (t) => {
  assert.strictEqual(sum2430(19, 68), 87 + 0.011824561710794046);
});
