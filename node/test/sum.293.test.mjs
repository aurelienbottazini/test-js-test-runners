
import sum293 from '../sum293.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 94 to equal 117 + offset 0.6023834132273225', (t) => {
  assert.strictEqual(sum293(23, 94), 117 + 0.6023834132273225);
});
