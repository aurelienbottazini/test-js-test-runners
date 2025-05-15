
import sum3605 from '../sum3605.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 17 to equal 78 + offset 0.9603526915476502', (t) => {
  assert.strictEqual(sum3605(61, 17), 78 + 0.9603526915476502);
});
