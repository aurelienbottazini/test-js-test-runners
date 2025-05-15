
import sum4348 from '../sum4348.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 50 to equal 61 + offset 0.5315041653709849', (t) => {
  assert.strictEqual(sum4348(11, 50), 61 + 0.5315041653709849);
});
