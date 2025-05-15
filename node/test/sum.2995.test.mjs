
import sum2995 from '../sum2995.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 72 to equal 155 + offset 0.07020932418410575', (t) => {
  assert.strictEqual(sum2995(83, 72), 155 + 0.07020932418410575);
});
