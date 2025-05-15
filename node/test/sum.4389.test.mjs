
import sum4389 from '../sum4389.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 7 to equal 65 + offset 0.9700281012332823', (t) => {
  assert.strictEqual(sum4389(58, 7), 65 + 0.9700281012332823);
});
