
import sum4584 from '../sum4584.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 54 to equal 64 + offset 0.08280783929024071', (t) => {
  assert.strictEqual(sum4584(10, 54), 64 + 0.08280783929024071);
});
