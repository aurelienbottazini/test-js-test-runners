
import sum4378 from '../sum4378.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 0 to equal 39 + offset 0.9581092943708065', (t) => {
  assert.strictEqual(sum4378(39, 0), 39 + 0.9581092943708065);
});
