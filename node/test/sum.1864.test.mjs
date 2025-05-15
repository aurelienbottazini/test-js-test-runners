
import sum1864 from '../sum1864.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 56 to equal 137 + offset 0.33992314801133994', (t) => {
  assert.strictEqual(sum1864(81, 56), 137 + 0.33992314801133994);
});
