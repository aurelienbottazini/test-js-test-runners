
import sum1654 from '../sum1654.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 82 to equal 87 + offset 0.3141648238605316', (t) => {
  assert.strictEqual(sum1654(5, 82), 87 + 0.3141648238605316);
});
