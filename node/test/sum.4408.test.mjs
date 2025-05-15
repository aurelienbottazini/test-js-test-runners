
import sum4408 from '../sum4408.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 3 to equal 75 + offset 0.43415330232094873', (t) => {
  assert.strictEqual(sum4408(72, 3), 75 + 0.43415330232094873);
});
