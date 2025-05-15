
import sum3453 from '../sum3453.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 68 to equal 158 + offset 0.1905681457608045', (t) => {
  assert.strictEqual(sum3453(90, 68), 158 + 0.1905681457608045);
});
