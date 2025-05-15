
import sum3578 from '../sum3578.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 94 to equal 141 + offset 0.1415299994635989', (t) => {
  assert.strictEqual(sum3578(47, 94), 141 + 0.1415299994635989);
});
