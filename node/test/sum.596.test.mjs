
import sum596 from '../sum596.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 61 to equal 98 + offset 0.059567564634647185', (t) => {
  assert.strictEqual(sum596(37, 61), 98 + 0.059567564634647185);
});
