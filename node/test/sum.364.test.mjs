
import sum364 from '../sum364.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 4 to equal 15 + offset 0.17592599797985664', (t) => {
  assert.strictEqual(sum364(11, 4), 15 + 0.17592599797985664);
});
