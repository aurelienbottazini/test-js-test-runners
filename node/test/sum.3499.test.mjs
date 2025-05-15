
import sum3499 from '../sum3499.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 51 to equal 57 + offset 0.18541416348453166', (t) => {
  assert.strictEqual(sum3499(6, 51), 57 + 0.18541416348453166);
});
