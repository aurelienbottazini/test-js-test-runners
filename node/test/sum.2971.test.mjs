
import sum2971 from '../sum2971.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 96 to equal 146 + offset 0.8310350928072898', (t) => {
  assert.strictEqual(sum2971(50, 96), 146 + 0.8310350928072898);
});
