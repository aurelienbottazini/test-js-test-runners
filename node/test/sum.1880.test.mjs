
import sum1880 from '../sum1880.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 9 to equal 72 + offset 0.26043557713253307', (t) => {
  assert.strictEqual(sum1880(63, 9), 72 + 0.26043557713253307);
});
