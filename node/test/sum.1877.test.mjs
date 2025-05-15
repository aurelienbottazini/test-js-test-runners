
import sum1877 from '../sum1877.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 72 to equal 135 + offset 0.34899702730804927', (t) => {
  assert.strictEqual(sum1877(63, 72), 135 + 0.34899702730804927);
});
