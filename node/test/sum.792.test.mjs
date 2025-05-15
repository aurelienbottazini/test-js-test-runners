
import sum792 from '../sum792.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 21 to equal 102 + offset 0.094760417830972', (t) => {
  assert.strictEqual(sum792(81, 21), 102 + 0.094760417830972);
});
