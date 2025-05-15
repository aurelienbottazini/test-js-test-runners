
import sum1403 from '../sum1403.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 81 to equal 81 + offset 0.15247010724450105', (t) => {
  assert.strictEqual(sum1403(0, 81), 81 + 0.15247010724450105);
});
