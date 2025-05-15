
import sum261 from '../sum261.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 78 to equal 132 + offset 0.18164817151024593', (t) => {
  assert.strictEqual(sum261(54, 78), 132 + 0.18164817151024593);
});
