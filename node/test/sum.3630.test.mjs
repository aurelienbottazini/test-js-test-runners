
import sum3630 from '../sum3630.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 40 to equal 54 + offset 0.7345173324146024', (t) => {
  assert.strictEqual(sum3630(14, 40), 54 + 0.7345173324146024);
});
