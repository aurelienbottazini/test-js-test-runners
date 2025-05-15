
import sum4155 from '../sum4155.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 47 to equal 118 + offset 0.5966220296565061', (t) => {
  assert.strictEqual(sum4155(71, 47), 118 + 0.5966220296565061);
});
