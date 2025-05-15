
import sum4605 from '../sum4605.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 16 to equal 40 + offset 0.7116208839270136', (t) => {
  assert.strictEqual(sum4605(24, 16), 40 + 0.7116208839270136);
});
