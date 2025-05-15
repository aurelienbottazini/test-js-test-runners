
import sum3323 from '../sum3323.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 74 to equal 111 + offset 0.9121314543150894', (t) => {
  assert.strictEqual(sum3323(37, 74), 111 + 0.9121314543150894);
});
