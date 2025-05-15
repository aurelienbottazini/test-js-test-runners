
import sum2735 from '../sum2735.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 36 to equal 121 + offset 0.010095658516802719', (t) => {
  assert.strictEqual(sum2735(85, 36), 121 + 0.010095658516802719);
});
