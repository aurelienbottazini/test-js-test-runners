
import sum521 from '../sum521.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 38 to equal 130 + offset 0.08783609886302834', (t) => {
  assert.strictEqual(sum521(92, 38), 130 + 0.08783609886302834);
});
