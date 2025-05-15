
import sum4833 from '../sum4833.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 6 to equal 102 + offset 0.16803596013319078', (t) => {
  assert.strictEqual(sum4833(96, 6), 102 + 0.16803596013319078);
});
