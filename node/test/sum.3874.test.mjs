
import sum3874 from '../sum3874.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 22 to equal 66 + offset 0.7295015981072382', (t) => {
  assert.strictEqual(sum3874(44, 22), 66 + 0.7295015981072382);
});
