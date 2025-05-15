
import sum1886 from '../sum1886.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 58 to equal 155 + offset 0.9682304385844113', (t) => {
  assert.strictEqual(sum1886(97, 58), 155 + 0.9682304385844113);
});
