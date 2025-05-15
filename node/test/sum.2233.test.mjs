
import sum2233 from '../sum2233.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 1 to equal 29 + offset 0.9630337628253136', (t) => {
  assert.strictEqual(sum2233(28, 1), 29 + 0.9630337628253136);
});
