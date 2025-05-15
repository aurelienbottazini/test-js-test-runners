
import sum3251 from '../sum3251.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 64 to equal 116 + offset 0.9158856625538668', (t) => {
  assert.strictEqual(sum3251(52, 64), 116 + 0.9158856625538668);
});
