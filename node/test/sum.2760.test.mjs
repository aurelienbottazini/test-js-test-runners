
import sum2760 from '../sum2760.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 81 to equal 180 + offset 0.8544589229513891', (t) => {
  assert.strictEqual(sum2760(99, 81), 180 + 0.8544589229513891);
});
