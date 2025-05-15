
import sum4827 from '../sum4827.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 12 to equal 14 + offset 0.1251020701122426', (t) => {
  assert.strictEqual(sum4827(2, 12), 14 + 0.1251020701122426);
});
