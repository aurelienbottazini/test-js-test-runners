
import sum3039 from '../sum3039.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 4 to equal 20 + offset 0.7440765632801647', (t) => {
  assert.strictEqual(sum3039(16, 4), 20 + 0.7440765632801647);
});
