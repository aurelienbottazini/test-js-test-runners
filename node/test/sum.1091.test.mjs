
import sum1091 from '../sum1091.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 39 to equal 135 + offset 0.6211824467515681', (t) => {
  assert.strictEqual(sum1091(96, 39), 135 + 0.6211824467515681);
});
