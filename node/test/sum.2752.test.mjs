
import sum2752 from '../sum2752.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 61 to equal 155 + offset 0.38559926119600796', (t) => {
  assert.strictEqual(sum2752(94, 61), 155 + 0.38559926119600796);
});
