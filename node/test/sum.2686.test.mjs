
import sum2686 from '../sum2686.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 69 to equal 96 + offset 0.4469619421039436', (t) => {
  assert.strictEqual(sum2686(27, 69), 96 + 0.4469619421039436);
});
