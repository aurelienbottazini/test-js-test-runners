
import sum1467 from '../sum1467.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 12 to equal 100 + offset 0.48409911762354174', (t) => {
  assert.strictEqual(sum1467(88, 12), 100 + 0.48409911762354174);
});
