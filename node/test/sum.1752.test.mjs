
import sum1752 from '../sum1752.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 43 to equal 99 + offset 0.03307628231629911', (t) => {
  assert.strictEqual(sum1752(56, 43), 99 + 0.03307628231629911);
});
