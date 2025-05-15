
import sum4478 from '../sum4478.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 22 to equal 27 + offset 0.7803951431807961', (t) => {
  assert.strictEqual(sum4478(5, 22), 27 + 0.7803951431807961);
});
