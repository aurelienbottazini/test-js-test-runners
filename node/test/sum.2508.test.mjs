
import sum2508 from '../sum2508.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 29 to equal 73 + offset 0.6030104933898597', (t) => {
  assert.strictEqual(sum2508(44, 29), 73 + 0.6030104933898597);
});
