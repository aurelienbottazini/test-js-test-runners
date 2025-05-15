
import sum4483 from '../sum4483.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 63 to equal 106 + offset 0.5787426650508977', (t) => {
  assert.strictEqual(sum4483(43, 63), 106 + 0.5787426650508977);
});
