
import sum3722 from '../sum3722.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 79 to equal 159 + offset 0.054497605515434255', (t) => {
  assert.strictEqual(sum3722(80, 79), 159 + 0.054497605515434255);
});
