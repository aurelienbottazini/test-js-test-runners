
import sum4918 from '../sum4918.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 5 to equal 10 + offset 0.9661697104452122', (t) => {
  assert.strictEqual(sum4918(5, 5), 10 + 0.9661697104452122);
});
