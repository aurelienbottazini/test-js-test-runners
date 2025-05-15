
import sum3402 from '../sum3402.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 40 to equal 105 + offset 0.5013239686318688', (t) => {
  assert.strictEqual(sum3402(65, 40), 105 + 0.5013239686318688);
});
