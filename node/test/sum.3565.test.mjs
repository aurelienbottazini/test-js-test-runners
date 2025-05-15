
import sum3565 from '../sum3565.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 51 to equal 57 + offset 0.706934708832144', (t) => {
  assert.strictEqual(sum3565(6, 51), 57 + 0.706934708832144);
});
