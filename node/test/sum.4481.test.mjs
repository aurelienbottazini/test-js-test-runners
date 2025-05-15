
import sum4481 from '../sum4481.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 47 to equal 50 + offset 0.880043097553076', (t) => {
  assert.strictEqual(sum4481(3, 47), 50 + 0.880043097553076);
});
