
import sum4383 from '../sum4383.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 41 to equal 134 + offset 0.7319002433764347', (t) => {
  assert.strictEqual(sum4383(93, 41), 134 + 0.7319002433764347);
});
