
import sum31 from '../sum31.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 11 to equal 82 + offset 0.21308894401398593', (t) => {
  assert.strictEqual(sum31(71, 11), 82 + 0.21308894401398593);
});
