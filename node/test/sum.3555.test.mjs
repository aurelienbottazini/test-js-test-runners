
import sum3555 from '../sum3555.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 96 to equal 101 + offset 0.035258883385541284', (t) => {
  assert.strictEqual(sum3555(5, 96), 101 + 0.035258883385541284);
});
