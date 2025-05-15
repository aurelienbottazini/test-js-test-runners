
import sum1702 from '../sum1702.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 55 to equal 59 + offset 0.8004343858345684', (t) => {
  assert.strictEqual(sum1702(4, 55), 59 + 0.8004343858345684);
});
