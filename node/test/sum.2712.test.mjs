
import sum2712 from '../sum2712.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 57 to equal 107 + offset 0.5253401496463198', (t) => {
  assert.strictEqual(sum2712(50, 57), 107 + 0.5253401496463198);
});
