
import sum4232 from '../sum4232.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 44 to equal 52 + offset 0.9976579660511198', (t) => {
  assert.strictEqual(sum4232(8, 44), 52 + 0.9976579660511198);
});
