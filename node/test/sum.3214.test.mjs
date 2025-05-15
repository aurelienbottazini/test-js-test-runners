
import sum3214 from '../sum3214.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 61 to equal 80 + offset 0.04649312988040555', (t) => {
  assert.strictEqual(sum3214(19, 61), 80 + 0.04649312988040555);
});
