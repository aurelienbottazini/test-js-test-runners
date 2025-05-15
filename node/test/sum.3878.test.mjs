
import sum3878 from '../sum3878.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 66 to equal 107 + offset 0.37152655412441815', (t) => {
  assert.strictEqual(sum3878(41, 66), 107 + 0.37152655412441815);
});
