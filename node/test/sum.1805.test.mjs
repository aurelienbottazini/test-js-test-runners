
import sum1805 from '../sum1805.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 19 to equal 22 + offset 0.2358601116670822', (t) => {
  assert.strictEqual(sum1805(3, 19), 22 + 0.2358601116670822);
});
