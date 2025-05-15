
import sum4702 from '../sum4702.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 9 to equal 28 + offset 0.09079196866279127', (t) => {
  assert.strictEqual(sum4702(19, 9), 28 + 0.09079196866279127);
});
