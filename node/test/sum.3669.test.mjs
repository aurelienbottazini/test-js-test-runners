
import sum3669 from '../sum3669.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 72 to equal 123 + offset 0.7166706968614284', (t) => {
  assert.strictEqual(sum3669(51, 72), 123 + 0.7166706968614284);
});
