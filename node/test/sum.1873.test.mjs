
import sum1873 from '../sum1873.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 29 to equal 76 + offset 0.4765317792573738', (t) => {
  assert.strictEqual(sum1873(47, 29), 76 + 0.4765317792573738);
});
