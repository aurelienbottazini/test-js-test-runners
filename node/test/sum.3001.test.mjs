
import sum3001 from '../sum3001.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 39 to equal 52 + offset 0.7785195713940449', (t) => {
  assert.strictEqual(sum3001(13, 39), 52 + 0.7785195713940449);
});
