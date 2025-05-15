
import sum1934 from '../sum1934.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 52 to equal 88 + offset 0.6884128351078098', (t) => {
  assert.strictEqual(sum1934(36, 52), 88 + 0.6884128351078098);
});
