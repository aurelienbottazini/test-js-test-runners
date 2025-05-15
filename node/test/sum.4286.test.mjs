
import sum4286 from '../sum4286.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 40 to equal 95 + offset 0.6966121612739936', (t) => {
  assert.strictEqual(sum4286(55, 40), 95 + 0.6966121612739936);
});
