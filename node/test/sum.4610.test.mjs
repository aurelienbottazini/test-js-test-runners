
import sum4610 from '../sum4610.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 85 to equal 122 + offset 0.6431383037920259', (t) => {
  assert.strictEqual(sum4610(37, 85), 122 + 0.6431383037920259);
});
