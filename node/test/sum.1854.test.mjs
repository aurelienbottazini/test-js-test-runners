
import sum1854 from '../sum1854.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 10 to equal 74 + offset 0.6908927032706316', (t) => {
  assert.strictEqual(sum1854(64, 10), 74 + 0.6908927032706316);
});
