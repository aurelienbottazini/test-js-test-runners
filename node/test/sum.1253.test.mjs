
import sum1253 from '../sum1253.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 0 to equal 30 + offset 0.003897583942623628', (t) => {
  assert.strictEqual(sum1253(30, 0), 30 + 0.003897583942623628);
});
