
import sum1284 from '../sum1284.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 12 to equal 103 + offset 0.01940736796604503', (t) => {
  assert.strictEqual(sum1284(91, 12), 103 + 0.01940736796604503);
});
