
import sum1150 from '../sum1150.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 65 to equal 72 + offset 0.7493839324744498', (t) => {
  assert.strictEqual(sum1150(7, 65), 72 + 0.7493839324744498);
});
