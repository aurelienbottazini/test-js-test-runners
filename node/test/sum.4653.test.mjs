
import sum4653 from '../sum4653.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 89 to equal 103 + offset 0.8188351474948637', (t) => {
  assert.strictEqual(sum4653(14, 89), 103 + 0.8188351474948637);
});
