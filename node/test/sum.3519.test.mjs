
import sum3519 from '../sum3519.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 31 to equal 92 + offset 0.1578929310624001', (t) => {
  assert.strictEqual(sum3519(61, 31), 92 + 0.1578929310624001);
});
