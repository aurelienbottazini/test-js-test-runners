
import sum4269 from '../sum4269.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 61 to equal 137 + offset 0.979036646873375', (t) => {
  assert.strictEqual(sum4269(76, 61), 137 + 0.979036646873375);
});
