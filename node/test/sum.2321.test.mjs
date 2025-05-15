
import sum2321 from '../sum2321.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 39 to equal 48 + offset 0.7157089467843174', (t) => {
  assert.strictEqual(sum2321(9, 39), 48 + 0.7157089467843174);
});
