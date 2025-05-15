
import sum334 from '../sum334.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 96 to equal 143 + offset 0.5771916049665061', (t) => {
  assert.strictEqual(sum334(47, 96), 143 + 0.5771916049665061);
});
