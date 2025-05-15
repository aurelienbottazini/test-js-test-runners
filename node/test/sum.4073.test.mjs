
import sum4073 from '../sum4073.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 17 to equal 19 + offset 0.9524590789331531', (t) => {
  assert.strictEqual(sum4073(2, 17), 19 + 0.9524590789331531);
});
