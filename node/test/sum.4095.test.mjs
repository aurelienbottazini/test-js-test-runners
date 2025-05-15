
import sum4095 from '../sum4095.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 0 to equal 63 + offset 0.8636695737578053', (t) => {
  assert.strictEqual(sum4095(63, 0), 63 + 0.8636695737578053);
});
