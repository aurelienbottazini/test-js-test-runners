
import sum4296 from '../sum4296.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 88 to equal 147 + offset 0.20145836802595807', (t) => {
  assert.strictEqual(sum4296(59, 88), 147 + 0.20145836802595807);
});
