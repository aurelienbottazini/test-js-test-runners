
import sum2372 from '../sum2372.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 31 to equal 124 + offset 0.5777180430450493', (t) => {
  assert.strictEqual(sum2372(93, 31), 124 + 0.5777180430450493);
});
