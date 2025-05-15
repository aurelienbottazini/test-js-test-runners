
import sum4747 from '../sum4747.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 77 to equal 148 + offset 0.5572441807042281', (t) => {
  assert.strictEqual(sum4747(71, 77), 148 + 0.5572441807042281);
});
