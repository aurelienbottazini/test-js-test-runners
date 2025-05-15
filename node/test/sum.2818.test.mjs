
import sum2818 from '../sum2818.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 39 to equal 74 + offset 0.6587638361705872', (t) => {
  assert.strictEqual(sum2818(35, 39), 74 + 0.6587638361705872);
});
