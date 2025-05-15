
import sum4217 from '../sum4217.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 55 to equal 63 + offset 0.38445388960428306', (t) => {
  assert.strictEqual(sum4217(8, 55), 63 + 0.38445388960428306);
});
