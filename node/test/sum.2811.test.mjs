
import sum2811 from '../sum2811.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 46 to equal 67 + offset 0.14794950392673756', (t) => {
  assert.strictEqual(sum2811(21, 46), 67 + 0.14794950392673756);
});
