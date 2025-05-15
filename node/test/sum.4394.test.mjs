
import sum4394 from '../sum4394.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 21 to equal 45 + offset 0.6236693371802973', (t) => {
  assert.strictEqual(sum4394(24, 21), 45 + 0.6236693371802973);
});
