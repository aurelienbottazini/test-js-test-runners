
import sum4517 from '../sum4517.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 44 to equal 101 + offset 0.47948117226164644', (t) => {
  assert.strictEqual(sum4517(57, 44), 101 + 0.47948117226164644);
});
