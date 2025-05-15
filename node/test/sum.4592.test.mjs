
import sum4592 from '../sum4592.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 56 to equal 82 + offset 0.7748513322499561', (t) => {
  assert.strictEqual(sum4592(26, 56), 82 + 0.7748513322499561);
});
