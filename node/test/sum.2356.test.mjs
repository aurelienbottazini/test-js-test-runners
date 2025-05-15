
import sum2356 from '../sum2356.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 21 to equal 25 + offset 0.6327791948863524', (t) => {
  assert.strictEqual(sum2356(4, 21), 25 + 0.6327791948863524);
});
