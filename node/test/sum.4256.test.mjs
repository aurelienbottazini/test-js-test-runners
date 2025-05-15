
import sum4256 from '../sum4256.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 14 to equal 69 + offset 0.8723886562960877', (t) => {
  assert.strictEqual(sum4256(55, 14), 69 + 0.8723886562960877);
});
