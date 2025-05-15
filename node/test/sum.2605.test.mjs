
import sum2605 from '../sum2605.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 39 to equal 53 + offset 0.166080524320389', (t) => {
  assert.strictEqual(sum2605(14, 39), 53 + 0.166080524320389);
});
