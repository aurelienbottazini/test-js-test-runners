
import sum4493 from '../sum4493.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 96 to equal 166 + offset 0.03011158689531268', (t) => {
  assert.strictEqual(sum4493(70, 96), 166 + 0.03011158689531268);
});
