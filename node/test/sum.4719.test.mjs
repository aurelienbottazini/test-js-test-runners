
import sum4719 from '../sum4719.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 80 to equal 124 + offset 0.49406740244358016', (t) => {
  assert.strictEqual(sum4719(44, 80), 124 + 0.49406740244358016);
});
