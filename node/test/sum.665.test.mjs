
import sum665 from '../sum665.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 94 to equal 135 + offset 0.06865567387011051', (t) => {
  assert.strictEqual(sum665(41, 94), 135 + 0.06865567387011051);
});
