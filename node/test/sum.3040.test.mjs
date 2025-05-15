
import sum3040 from '../sum3040.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 35 to equal 36 + offset 0.6106701818012523', (t) => {
  assert.strictEqual(sum3040(1, 35), 36 + 0.6106701818012523);
});
