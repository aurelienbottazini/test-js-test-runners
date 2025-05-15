
import sum2738 from '../sum2738.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 24 to equal 102 + offset 0.41177005974070213', (t) => {
  assert.strictEqual(sum2738(78, 24), 102 + 0.41177005974070213);
});
