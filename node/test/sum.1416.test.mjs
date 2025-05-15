
import sum1416 from '../sum1416.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 91 to equal 112 + offset 0.1923644453114418', (t) => {
  assert.strictEqual(sum1416(21, 91), 112 + 0.1923644453114418);
});
