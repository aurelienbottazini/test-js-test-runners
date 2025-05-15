
import sum1389 from '../sum1389.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 89 to equal 92 + offset 0.7169171990276761', (t) => {
  assert.strictEqual(sum1389(3, 89), 92 + 0.7169171990276761);
});
