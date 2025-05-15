
import sum1506 from '../sum1506.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 56 to equal 59 + offset 0.2777249658562361', (t) => {
  assert.strictEqual(sum1506(3, 56), 59 + 0.2777249658562361);
});
