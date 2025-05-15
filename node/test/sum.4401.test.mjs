
import sum4401 from '../sum4401.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 31 to equal 95 + offset 0.8241629781895095', (t) => {
  assert.strictEqual(sum4401(64, 31), 95 + 0.8241629781895095);
});
