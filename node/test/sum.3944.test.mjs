
import sum3944 from '../sum3944.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 23 to equal 28 + offset 0.6781845829247681', (t) => {
  assert.strictEqual(sum3944(5, 23), 28 + 0.6781845829247681);
});
