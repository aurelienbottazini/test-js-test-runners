
import sum2423 from '../sum2423.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 73 to equal 79 + offset 0.40911540548016345', (t) => {
  assert.strictEqual(sum2423(6, 73), 79 + 0.40911540548016345);
});
