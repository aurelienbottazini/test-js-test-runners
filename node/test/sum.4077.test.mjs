
import sum4077 from '../sum4077.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 48 to equal 54 + offset 0.908113303388999', (t) => {
  assert.strictEqual(sum4077(6, 48), 54 + 0.908113303388999);
});
