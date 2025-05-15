
import sum833 from '../sum833.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 52 to equal 64 + offset 0.26872907526725465', (t) => {
  assert.strictEqual(sum833(12, 52), 64 + 0.26872907526725465);
});
