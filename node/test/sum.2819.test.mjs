
import sum2819 from '../sum2819.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 55 to equal 118 + offset 0.45776311732239605', (t) => {
  assert.strictEqual(sum2819(63, 55), 118 + 0.45776311732239605);
});
