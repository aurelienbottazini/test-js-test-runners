
import sum2437 from '../sum2437.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 36 to equal 38 + offset 0.036141624640072534', (t) => {
  assert.strictEqual(sum2437(2, 36), 38 + 0.036141624640072534);
});
