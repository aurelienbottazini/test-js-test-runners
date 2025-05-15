
import sum855 from '../sum855.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 6 to equal 64 + offset 0.05384272725672312', (t) => {
  assert.strictEqual(sum855(58, 6), 64 + 0.05384272725672312);
});
