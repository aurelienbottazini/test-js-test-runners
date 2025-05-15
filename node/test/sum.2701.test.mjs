
import sum2701 from '../sum2701.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 99 to equal 179 + offset 0.8204802139813148', (t) => {
  assert.strictEqual(sum2701(80, 99), 179 + 0.8204802139813148);
});
