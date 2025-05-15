
import sum4006 from '../sum4006.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 21 to equal 38 + offset 0.28244248893817303', (t) => {
  assert.strictEqual(sum4006(17, 21), 38 + 0.28244248893817303);
});
