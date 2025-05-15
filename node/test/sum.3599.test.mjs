
import sum3599 from '../sum3599.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 43 to equal 89 + offset 0.47931771017745817', (t) => {
  assert.strictEqual(sum3599(46, 43), 89 + 0.47931771017745817);
});
