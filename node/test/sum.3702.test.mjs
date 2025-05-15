
import sum3702 from '../sum3702.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 79 to equal 143 + offset 0.7560758212818384', (t) => {
  assert.strictEqual(sum3702(64, 79), 143 + 0.7560758212818384);
});
