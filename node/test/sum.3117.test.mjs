
import sum3117 from '../sum3117.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 38 to equal 94 + offset 0.2881525429246421', (t) => {
  assert.strictEqual(sum3117(56, 38), 94 + 0.2881525429246421);
});
