
import sum2727 from '../sum2727.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 95 to equal 136 + offset 0.498175727766094', (t) => {
  assert.strictEqual(sum2727(41, 95), 136 + 0.498175727766094);
});
