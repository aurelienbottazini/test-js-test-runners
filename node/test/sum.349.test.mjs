
import sum349 from '../sum349.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 20 to equal 67 + offset 0.5083325858224842', (t) => {
  assert.strictEqual(sum349(47, 20), 67 + 0.5083325858224842);
});
