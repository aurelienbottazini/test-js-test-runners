
import sum143 from '../sum143.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 90 to equal 146 + offset 0.41297555741445846', (t) => {
  assert.strictEqual(sum143(56, 90), 146 + 0.41297555741445846);
});
