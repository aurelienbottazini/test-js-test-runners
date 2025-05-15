
import sum4081 from '../sum4081.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 45 to equal 107 + offset 0.949154269504729', (t) => {
  assert.strictEqual(sum4081(62, 45), 107 + 0.949154269504729);
});
