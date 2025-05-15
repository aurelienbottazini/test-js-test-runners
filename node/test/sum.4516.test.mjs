
import sum4516 from '../sum4516.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 29 to equal 68 + offset 0.9764137073046067', (t) => {
  assert.strictEqual(sum4516(39, 29), 68 + 0.9764137073046067);
});
