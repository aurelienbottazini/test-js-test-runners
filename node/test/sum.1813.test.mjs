
import sum1813 from '../sum1813.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 29 to equal 118 + offset 0.2958320246876308', (t) => {
  assert.strictEqual(sum1813(89, 29), 118 + 0.2958320246876308);
});
