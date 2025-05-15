
import sum4903 from '../sum4903.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 84 to equal 165 + offset 0.6599962270851831', (t) => {
  assert.strictEqual(sum4903(81, 84), 165 + 0.6599962270851831);
});
