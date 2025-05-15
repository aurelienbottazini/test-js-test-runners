
import sum3283 from '../sum3283.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 59 to equal 74 + offset 0.12961942720763409', (t) => {
  assert.strictEqual(sum3283(15, 59), 74 + 0.12961942720763409);
});
