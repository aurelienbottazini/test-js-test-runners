
import sum1808 from '../sum1808.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 12 to equal 21 + offset 0.10673452743126477', (t) => {
  assert.strictEqual(sum1808(9, 12), 21 + 0.10673452743126477);
});
