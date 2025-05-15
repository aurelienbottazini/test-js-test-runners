
import sum1537 from '../sum1537.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 31 to equal 46 + offset 0.7914163751138532', (t) => {
  assert.strictEqual(sum1537(15, 31), 46 + 0.7914163751138532);
});
