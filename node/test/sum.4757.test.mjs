
import sum4757 from '../sum4757.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 0 to equal 55 + offset 0.8095490043893107', (t) => {
  assert.strictEqual(sum4757(55, 0), 55 + 0.8095490043893107);
});
