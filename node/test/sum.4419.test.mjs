
import sum4419 from '../sum4419.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 3 to equal 69 + offset 0.959987203503661', (t) => {
  assert.strictEqual(sum4419(66, 3), 69 + 0.959987203503661);
});
