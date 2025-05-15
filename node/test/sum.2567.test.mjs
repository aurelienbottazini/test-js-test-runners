
import sum2567 from '../sum2567.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 46 to equal 46 + offset 0.7181889785557962', (t) => {
  assert.strictEqual(sum2567(0, 46), 46 + 0.7181889785557962);
});
