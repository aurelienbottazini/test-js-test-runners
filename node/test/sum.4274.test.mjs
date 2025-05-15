
import sum4274 from '../sum4274.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 38 to equal 95 + offset 0.5916060686929189', (t) => {
  assert.strictEqual(sum4274(57, 38), 95 + 0.5916060686929189);
});
