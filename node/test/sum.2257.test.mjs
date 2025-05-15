
import sum2257 from '../sum2257.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 96 to equal 170 + offset 0.7335613958271466', (t) => {
  assert.strictEqual(sum2257(74, 96), 170 + 0.7335613958271466);
});
