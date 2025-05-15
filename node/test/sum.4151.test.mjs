
import sum4151 from '../sum4151.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 1 to equal 2 + offset 0.7983041768285171', (t) => {
  assert.strictEqual(sum4151(1, 1), 2 + 0.7983041768285171);
});
