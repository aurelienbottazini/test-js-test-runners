
import sum1595 from '../sum1595.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 99 to equal 178 + offset 0.7608982252972024', (t) => {
  assert.strictEqual(sum1595(79, 99), 178 + 0.7608982252972024);
});
