
import sum1431 from '../sum1431.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 45 to equal 83 + offset 0.4041834429958867', (t) => {
  assert.strictEqual(sum1431(38, 45), 83 + 0.4041834429958867);
});
