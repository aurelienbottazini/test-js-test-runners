
import sum2073 from '../sum2073.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 96 to equal 167 + offset 0.31180239382870145', (t) => {
  assert.strictEqual(sum2073(71, 96), 167 + 0.31180239382870145);
});
