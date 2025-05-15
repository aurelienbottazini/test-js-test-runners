
import sum1401 from '../sum1401.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 61 to equal 119 + offset 0.544328273294325', (t) => {
  assert.strictEqual(sum1401(58, 61), 119 + 0.544328273294325);
});
