
import sum3769 from '../sum3769.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 8 to equal 71 + offset 0.04513224846131114', (t) => {
  assert.strictEqual(sum3769(63, 8), 71 + 0.04513224846131114);
});
