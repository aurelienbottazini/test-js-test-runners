
import sum3760 from '../sum3760.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 54 to equal 56 + offset 0.9311475012996353', (t) => {
  assert.strictEqual(sum3760(2, 54), 56 + 0.9311475012996353);
});
