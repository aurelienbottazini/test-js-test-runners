
import sum2370 from '../sum2370.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 98 to equal 157 + offset 0.11822110166398281', (t) => {
  assert.strictEqual(sum2370(59, 98), 157 + 0.11822110166398281);
});
