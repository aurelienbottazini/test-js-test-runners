
import sum4865 from '../sum4865.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 19 to equal 68 + offset 0.5769431431649819', (t) => {
  assert.strictEqual(sum4865(49, 19), 68 + 0.5769431431649819);
});
