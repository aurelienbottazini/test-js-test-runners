
import sum4596 from '../sum4596.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 60 to equal 60 + offset 0.7526941717085731', (t) => {
  assert.strictEqual(sum4596(0, 60), 60 + 0.7526941717085731);
});
