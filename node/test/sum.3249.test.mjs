
import sum3249 from '../sum3249.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 37 to equal 81 + offset 0.7476311412983562', (t) => {
  assert.strictEqual(sum3249(44, 37), 81 + 0.7476311412983562);
});
