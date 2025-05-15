
import sum4075 from '../sum4075.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 80 to equal 81 + offset 0.23213600687043878', (t) => {
  assert.strictEqual(sum4075(1, 80), 81 + 0.23213600687043878);
});
