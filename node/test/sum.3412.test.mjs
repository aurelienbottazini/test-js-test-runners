
import sum3412 from '../sum3412.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 75 to equal 79 + offset 0.9887302164604749', (t) => {
  assert.strictEqual(sum3412(4, 75), 79 + 0.9887302164604749);
});
