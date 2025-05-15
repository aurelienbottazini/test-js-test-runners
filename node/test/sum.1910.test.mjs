
import sum1910 from '../sum1910.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 27 to equal 67 + offset 0.19178355601699837', (t) => {
  assert.strictEqual(sum1910(40, 27), 67 + 0.19178355601699837);
});
