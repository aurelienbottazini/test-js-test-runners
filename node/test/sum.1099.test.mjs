
import sum1099 from '../sum1099.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 47 to equal 122 + offset 0.49958917695441984', (t) => {
  assert.strictEqual(sum1099(75, 47), 122 + 0.49958917695441984);
});
