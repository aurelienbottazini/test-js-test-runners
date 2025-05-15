
import sum4543 from '../sum4543.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 1 to equal 93 + offset 0.588313755533719', (t) => {
  assert.strictEqual(sum4543(92, 1), 93 + 0.588313755533719);
});
