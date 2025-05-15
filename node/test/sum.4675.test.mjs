
import sum4675 from '../sum4675.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 26 to equal 71 + offset 0.3255935174577935', (t) => {
  assert.strictEqual(sum4675(45, 26), 71 + 0.3255935174577935);
});
