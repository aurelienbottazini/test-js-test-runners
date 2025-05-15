
import sum2389 from '../sum2389.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 64 to equal 105 + offset 0.5405161703960539', (t) => {
  assert.strictEqual(sum2389(41, 64), 105 + 0.5405161703960539);
});
