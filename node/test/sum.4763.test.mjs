
import sum4763 from '../sum4763.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 80 to equal 176 + offset 0.6165492120056333', (t) => {
  assert.strictEqual(sum4763(96, 80), 176 + 0.6165492120056333);
});
