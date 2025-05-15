
import sum1348 from '../sum1348.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 34 to equal 132 + offset 0.36662447098795536', (t) => {
  assert.strictEqual(sum1348(98, 34), 132 + 0.36662447098795536);
});
