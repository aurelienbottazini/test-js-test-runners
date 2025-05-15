
import sum4582 from '../sum4582.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 59 to equal 93 + offset 0.5670078180230523', (t) => {
  assert.strictEqual(sum4582(34, 59), 93 + 0.5670078180230523);
});
