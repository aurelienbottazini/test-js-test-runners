
import sum598 from '../sum598.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 74 to equal 140 + offset 0.8740480894756693', (t) => {
  assert.strictEqual(sum598(66, 74), 140 + 0.8740480894756693);
});
