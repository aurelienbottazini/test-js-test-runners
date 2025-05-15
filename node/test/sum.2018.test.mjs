
import sum2018 from '../sum2018.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 40 to equal 114 + offset 0.2374499940817607', (t) => {
  assert.strictEqual(sum2018(74, 40), 114 + 0.2374499940817607);
});
