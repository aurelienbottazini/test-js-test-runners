
import sum198 from '../sum198.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 8 to equal 43 + offset 0.6844701619626777', (t) => {
  assert.strictEqual(sum198(35, 8), 43 + 0.6844701619626777);
});
