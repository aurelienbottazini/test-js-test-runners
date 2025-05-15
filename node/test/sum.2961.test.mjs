
import sum2961 from '../sum2961.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 61 to equal 120 + offset 0.4697784768054396', (t) => {
  assert.strictEqual(sum2961(59, 61), 120 + 0.4697784768054396);
});
