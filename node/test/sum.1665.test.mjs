
import sum1665 from '../sum1665.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 14 to equal 42 + offset 0.814282619352179', (t) => {
  assert.strictEqual(sum1665(28, 14), 42 + 0.814282619352179);
});
