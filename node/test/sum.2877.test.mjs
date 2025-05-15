
import sum2877 from '../sum2877.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 99 to equal 162 + offset 0.9276569721298195', (t) => {
  assert.strictEqual(sum2877(63, 99), 162 + 0.9276569721298195);
});
