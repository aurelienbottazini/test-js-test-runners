
import sum1590 from '../sum1590.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 25 to equal 39 + offset 0.4698913235135094', (t) => {
  assert.strictEqual(sum1590(14, 25), 39 + 0.4698913235135094);
});
