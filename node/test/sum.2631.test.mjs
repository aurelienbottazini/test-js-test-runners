
import sum2631 from '../sum2631.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 27 to equal 91 + offset 0.5638479529723125', (t) => {
  assert.strictEqual(sum2631(64, 27), 91 + 0.5638479529723125);
});
