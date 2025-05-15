
import sum2206 from '../sum2206.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 80 to equal 110 + offset 0.08924479267265906', (t) => {
  assert.strictEqual(sum2206(30, 80), 110 + 0.08924479267265906);
});
