
import sum2920 from '../sum2920.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 4 to equal 77 + offset 0.6165043314192986', (t) => {
  assert.strictEqual(sum2920(73, 4), 77 + 0.6165043314192986);
});
