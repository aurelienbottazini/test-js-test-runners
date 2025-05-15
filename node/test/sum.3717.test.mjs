
import sum3717 from '../sum3717.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 30 to equal 85 + offset 0.6518715483294196', (t) => {
  assert.strictEqual(sum3717(55, 30), 85 + 0.6518715483294196);
});
