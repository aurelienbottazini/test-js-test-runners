
import sum1900 from '../sum1900.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 15 to equal 16 + offset 0.9433344426904422', (t) => {
  assert.strictEqual(sum1900(1, 15), 16 + 0.9433344426904422);
});
