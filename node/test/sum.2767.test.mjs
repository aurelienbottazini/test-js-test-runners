
import sum2767 from '../sum2767.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 96 to equal 102 + offset 0.5428494720522797', (t) => {
  assert.strictEqual(sum2767(6, 96), 102 + 0.5428494720522797);
});
