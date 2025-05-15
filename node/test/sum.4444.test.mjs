
import sum4444 from '../sum4444.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 10 to equal 87 + offset 0.3591540483544129', (t) => {
  assert.strictEqual(sum4444(77, 10), 87 + 0.3591540483544129);
});
