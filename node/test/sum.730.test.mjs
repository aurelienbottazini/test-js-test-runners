
import sum730 from '../sum730.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 37 to equal 107 + offset 0.6497289941303696', (t) => {
  assert.strictEqual(sum730(70, 37), 107 + 0.6497289941303696);
});
