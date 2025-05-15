
import sum3791 from '../sum3791.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 77 to equal 132 + offset 0.005970155309923064', (t) => {
  assert.strictEqual(sum3791(55, 77), 132 + 0.005970155309923064);
});
