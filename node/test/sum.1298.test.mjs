
import sum1298 from '../sum1298.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 68 to equal 81 + offset 0.6790746607320842', (t) => {
  assert.strictEqual(sum1298(13, 68), 81 + 0.6790746607320842);
});
