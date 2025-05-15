
import sum3288 from '../sum3288.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 14 to equal 51 + offset 0.9417650349645402', (t) => {
  assert.strictEqual(sum3288(37, 14), 51 + 0.9417650349645402);
});
