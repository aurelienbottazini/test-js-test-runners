
import sum2790 from '../sum2790.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 77 to equal 169 + offset 0.14262438515762', (t) => {
  assert.strictEqual(sum2790(92, 77), 169 + 0.14262438515762);
});
