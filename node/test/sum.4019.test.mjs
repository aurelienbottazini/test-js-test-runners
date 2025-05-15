
import sum4019 from '../sum4019.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 34 to equal 72 + offset 0.0869294557206316', (t) => {
  assert.strictEqual(sum4019(38, 34), 72 + 0.0869294557206316);
});
