
import sum2836 from '../sum2836.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 6 to equal 12 + offset 0.7288432987724726', (t) => {
  assert.strictEqual(sum2836(6, 6), 12 + 0.7288432987724726);
});
