
import sum1169 from '../sum1169.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 39 to equal 98 + offset 0.6781571291911227', (t) => {
  assert.strictEqual(sum1169(59, 39), 98 + 0.6781571291911227);
});
