
import sum1815 from '../sum1815.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 63 to equal 113 + offset 0.4592643191071122', (t) => {
  assert.strictEqual(sum1815(50, 63), 113 + 0.4592643191071122);
});
