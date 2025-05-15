
import sum4332 from '../sum4332.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 14 to equal 76 + offset 0.8754395721704947', (t) => {
  assert.strictEqual(sum4332(62, 14), 76 + 0.8754395721704947);
});
