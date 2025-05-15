
import sum1438 from '../sum1438.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 81 to equal 131 + offset 0.3353271509885236', (t) => {
  assert.strictEqual(sum1438(50, 81), 131 + 0.3353271509885236);
});
