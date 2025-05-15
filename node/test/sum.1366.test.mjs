
import sum1366 from '../sum1366.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 32 to equal 108 + offset 0.3981215898083792', (t) => {
  assert.strictEqual(sum1366(76, 32), 108 + 0.3981215898083792);
});
