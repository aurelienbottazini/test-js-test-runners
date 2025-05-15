
import sum2348 from '../sum2348.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 95 to equal 143 + offset 0.020462339710260125', (t) => {
  assert.strictEqual(sum2348(48, 95), 143 + 0.020462339710260125);
});
