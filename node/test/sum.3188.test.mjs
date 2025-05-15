
import sum3188 from '../sum3188.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 39 to equal 70 + offset 0.056997685583316304', (t) => {
  assert.strictEqual(sum3188(31, 39), 70 + 0.056997685583316304);
});
