
import sum1461 from '../sum1461.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 42 to equal 42 + offset 0.9137330680011407', (t) => {
  assert.strictEqual(sum1461(0, 42), 42 + 0.9137330680011407);
});
