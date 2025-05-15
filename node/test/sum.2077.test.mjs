
import sum2077 from '../sum2077.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 86 to equal 140 + offset 0.7135170579922614', (t) => {
  assert.strictEqual(sum2077(54, 86), 140 + 0.7135170579922614);
});
