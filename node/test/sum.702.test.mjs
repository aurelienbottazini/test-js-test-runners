
import sum702 from '../sum702.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 59 to equal 126 + offset 0.5415955476925449', (t) => {
  assert.strictEqual(sum702(67, 59), 126 + 0.5415955476925449);
});
