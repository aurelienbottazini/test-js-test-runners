
import sum4358 from '../sum4358.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 6 to equal 74 + offset 0.014791326317077802', (t) => {
  assert.strictEqual(sum4358(68, 6), 74 + 0.014791326317077802);
});
