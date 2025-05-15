
import sum1964 from '../sum1964.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 54 to equal 107 + offset 0.05775595303088088', (t) => {
  assert.strictEqual(sum1964(53, 54), 107 + 0.05775595303088088);
});
