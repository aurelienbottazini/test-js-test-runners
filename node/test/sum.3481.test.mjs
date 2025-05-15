
import sum3481 from '../sum3481.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 66 to equal 147 + offset 0.20160643293119096', (t) => {
  assert.strictEqual(sum3481(81, 66), 147 + 0.20160643293119096);
});
