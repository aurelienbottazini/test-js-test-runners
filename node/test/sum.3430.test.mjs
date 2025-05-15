
import sum3430 from '../sum3430.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 99 to equal 144 + offset 0.9131011235810299', (t) => {
  assert.strictEqual(sum3430(45, 99), 144 + 0.9131011235810299);
});
