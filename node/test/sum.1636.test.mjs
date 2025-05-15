
import sum1636 from '../sum1636.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 10 to equal 13 + offset 0.9610494245175761', (t) => {
  assert.strictEqual(sum1636(3, 10), 13 + 0.9610494245175761);
});
