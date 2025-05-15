
import sum562 from '../sum562.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 59 to equal 129 + offset 0.1933545010023291', (t) => {
  assert.strictEqual(sum562(70, 59), 129 + 0.1933545010023291);
});
