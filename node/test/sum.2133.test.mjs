
import sum2133 from '../sum2133.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 70 to equal 167 + offset 0.6395584265488271', (t) => {
  assert.strictEqual(sum2133(97, 70), 167 + 0.6395584265488271);
});
