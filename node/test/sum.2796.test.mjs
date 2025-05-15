
import sum2796 from '../sum2796.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 12 to equal 84 + offset 0.20211751326914584', (t) => {
  assert.strictEqual(sum2796(72, 12), 84 + 0.20211751326914584);
});
