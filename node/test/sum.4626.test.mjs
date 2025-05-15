
import sum4626 from '../sum4626.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 15 to equal 26 + offset 0.37099926422628693', (t) => {
  assert.strictEqual(sum4626(11, 15), 26 + 0.37099926422628693);
});
