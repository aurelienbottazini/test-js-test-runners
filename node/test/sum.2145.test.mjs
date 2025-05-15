
import sum2145 from '../sum2145.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 74 to equal 89 + offset 0.6567012311542638', (t) => {
  assert.strictEqual(sum2145(15, 74), 89 + 0.6567012311542638);
});
