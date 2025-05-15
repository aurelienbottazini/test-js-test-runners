
import sum4559 from '../sum4559.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 4 to equal 68 + offset 0.13392729193108832', (t) => {
  assert.strictEqual(sum4559(64, 4), 68 + 0.13392729193108832);
});
