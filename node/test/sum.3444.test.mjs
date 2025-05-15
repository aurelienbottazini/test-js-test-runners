
import sum3444 from '../sum3444.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 15 to equal 107 + offset 0.8100422631989681', (t) => {
  assert.strictEqual(sum3444(92, 15), 107 + 0.8100422631989681);
});
