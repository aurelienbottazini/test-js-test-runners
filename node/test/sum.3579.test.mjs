
import sum3579 from '../sum3579.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 60 to equal 65 + offset 0.9994969870133597', (t) => {
  assert.strictEqual(sum3579(5, 60), 65 + 0.9994969870133597);
});
