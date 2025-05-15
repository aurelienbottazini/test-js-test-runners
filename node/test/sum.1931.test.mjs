
import sum1931 from '../sum1931.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 51 to equal 87 + offset 0.8228455833163861', (t) => {
  assert.strictEqual(sum1931(36, 51), 87 + 0.8228455833163861);
});
