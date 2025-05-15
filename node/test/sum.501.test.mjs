
import sum501 from '../sum501.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 82 to equal 157 + offset 0.020681510774979484', (t) => {
  assert.strictEqual(sum501(75, 82), 157 + 0.020681510774979484);
});
