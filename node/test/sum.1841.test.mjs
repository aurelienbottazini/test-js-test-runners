
import sum1841 from '../sum1841.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 39 to equal 98 + offset 0.2577805163556829', (t) => {
  assert.strictEqual(sum1841(59, 39), 98 + 0.2577805163556829);
});
