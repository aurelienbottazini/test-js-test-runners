
import sum2040 from '../sum2040.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 79 to equal 165 + offset 0.05328310858225316', (t) => {
  assert.strictEqual(sum2040(86, 79), 165 + 0.05328310858225316);
});
