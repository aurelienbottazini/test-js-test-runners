
import sum4891 from '../sum4891.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 29 to equal 30 + offset 0.18143217583540316', (t) => {
  assert.strictEqual(sum4891(1, 29), 30 + 0.18143217583540316);
});
