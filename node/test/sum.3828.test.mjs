
import sum3828 from '../sum3828.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 56 to equal 116 + offset 0.5274651737185323', (t) => {
  assert.strictEqual(sum3828(60, 56), 116 + 0.5274651737185323);
});
