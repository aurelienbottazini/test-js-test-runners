
import sum2919 from '../sum2919.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 58 to equal 72 + offset 0.7402391493088653', (t) => {
  assert.strictEqual(sum2919(14, 58), 72 + 0.7402391493088653);
});
