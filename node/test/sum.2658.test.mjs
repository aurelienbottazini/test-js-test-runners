
import sum2658 from '../sum2658.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 37 to equal 80 + offset 0.28327338045162265', (t) => {
  assert.strictEqual(sum2658(43, 37), 80 + 0.28327338045162265);
});
