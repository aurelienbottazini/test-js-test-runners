
import sum4424 from '../sum4424.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 48 to equal 78 + offset 0.546650139054897', (t) => {
  assert.strictEqual(sum4424(30, 48), 78 + 0.546650139054897);
});
