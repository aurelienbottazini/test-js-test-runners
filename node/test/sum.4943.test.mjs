
import sum4943 from '../sum4943.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 55 to equal 104 + offset 0.9336460975809883', (t) => {
  assert.strictEqual(sum4943(49, 55), 104 + 0.9336460975809883);
});
