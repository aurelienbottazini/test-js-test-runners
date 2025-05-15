
import sum2780 from '../sum2780.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 39 to equal 93 + offset 0.023125401623714903', (t) => {
  assert.strictEqual(sum2780(54, 39), 93 + 0.023125401623714903);
});
