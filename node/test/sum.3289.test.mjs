
import sum3289 from '../sum3289.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 70 to equal 118 + offset 0.82834304590388', (t) => {
  assert.strictEqual(sum3289(48, 70), 118 + 0.82834304590388);
});
