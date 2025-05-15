
import sum3716 from '../sum3716.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 50 to equal 144 + offset 0.5080189639480626', (t) => {
  assert.strictEqual(sum3716(94, 50), 144 + 0.5080189639480626);
});
