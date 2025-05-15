
import sum2812 from '../sum2812.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 15 to equal 102 + offset 0.213692783596778', (t) => {
  assert.strictEqual(sum2812(87, 15), 102 + 0.213692783596778);
});
