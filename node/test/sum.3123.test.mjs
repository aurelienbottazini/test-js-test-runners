
import sum3123 from '../sum3123.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 29 to equal 62 + offset 0.408023290668891', (t) => {
  assert.strictEqual(sum3123(33, 29), 62 + 0.408023290668891);
});
