
import sum4337 from '../sum4337.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 41 to equal 65 + offset 0.4902126977498008', (t) => {
  assert.strictEqual(sum4337(24, 41), 65 + 0.4902126977498008);
});
