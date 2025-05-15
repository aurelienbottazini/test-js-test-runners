
import sum2497 from '../sum2497.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 46 to equal 88 + offset 0.5487734778840306', (t) => {
  assert.strictEqual(sum2497(42, 46), 88 + 0.5487734778840306);
});
