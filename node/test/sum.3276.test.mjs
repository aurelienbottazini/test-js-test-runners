
import sum3276 from '../sum3276.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 68 to equal 167 + offset 0.395585557132607', (t) => {
  assert.strictEqual(sum3276(99, 68), 167 + 0.395585557132607);
});
