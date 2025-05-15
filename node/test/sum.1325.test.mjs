
import sum1325 from '../sum1325.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 19 to equal 71 + offset 0.5656397519410895', (t) => {
  assert.strictEqual(sum1325(52, 19), 71 + 0.5656397519410895);
});
