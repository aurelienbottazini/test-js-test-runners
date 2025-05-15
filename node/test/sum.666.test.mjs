
import sum666 from '../sum666.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 62 to equal 93 + offset 0.21129179505236073', (t) => {
  assert.strictEqual(sum666(31, 62), 93 + 0.21129179505236073);
});
