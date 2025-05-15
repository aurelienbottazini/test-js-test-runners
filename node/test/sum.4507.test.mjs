
import sum4507 from '../sum4507.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 71 to equal 114 + offset 0.7598297616873998', (t) => {
  assert.strictEqual(sum4507(43, 71), 114 + 0.7598297616873998);
});
