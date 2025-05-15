
import sum1500 from '../sum1500.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 71 to equal 85 + offset 0.34085151850557494', (t) => {
  assert.strictEqual(sum1500(14, 71), 85 + 0.34085151850557494);
});
