
import sum3788 from '../sum3788.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 38 to equal 132 + offset 0.054456546211031465', (t) => {
  assert.strictEqual(sum3788(94, 38), 132 + 0.054456546211031465);
});
