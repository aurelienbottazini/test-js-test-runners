
import sum1008 from '../sum1008.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 41 to equal 108 + offset 0.7236312003462948', (t) => {
  assert.strictEqual(sum1008(67, 41), 108 + 0.7236312003462948);
});
