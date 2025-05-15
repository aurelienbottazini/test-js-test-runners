
import sum4292 from '../sum4292.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 54 to equal 85 + offset 0.24964773426590692', (t) => {
  assert.strictEqual(sum4292(31, 54), 85 + 0.24964773426590692);
});
