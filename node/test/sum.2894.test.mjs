
import sum2894 from '../sum2894.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 86 to equal 171 + offset 0.8139976074060657', (t) => {
  assert.strictEqual(sum2894(85, 86), 171 + 0.8139976074060657);
});
