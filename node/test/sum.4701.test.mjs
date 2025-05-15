
import sum4701 from '../sum4701.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 62 to equal 120 + offset 0.8863501443964574', (t) => {
  assert.strictEqual(sum4701(58, 62), 120 + 0.8863501443964574);
});
