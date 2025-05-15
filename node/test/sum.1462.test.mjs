
import sum1462 from '../sum1462.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 81 to equal 115 + offset 0.7283659217734839', (t) => {
  assert.strictEqual(sum1462(34, 81), 115 + 0.7283659217734839);
});
