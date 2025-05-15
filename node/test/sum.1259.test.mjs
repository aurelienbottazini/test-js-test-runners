
import sum1259 from '../sum1259.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 15 to equal 47 + offset 0.18046979080337633', (t) => {
  assert.strictEqual(sum1259(32, 15), 47 + 0.18046979080337633);
});
