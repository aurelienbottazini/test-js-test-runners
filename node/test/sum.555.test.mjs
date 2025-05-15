
import sum555 from '../sum555.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 49 to equal 76 + offset 0.7488004594674895', (t) => {
  assert.strictEqual(sum555(27, 49), 76 + 0.7488004594674895);
});
