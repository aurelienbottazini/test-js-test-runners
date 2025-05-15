
import sum1850 from '../sum1850.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 34 to equal 87 + offset 0.6344200957343091', (t) => {
  assert.strictEqual(sum1850(53, 34), 87 + 0.6344200957343091);
});
