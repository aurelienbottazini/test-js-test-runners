
import sum4439 from '../sum4439.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 80 to equal 152 + offset 0.798554983256913', (t) => {
  assert.strictEqual(sum4439(72, 80), 152 + 0.798554983256913);
});
