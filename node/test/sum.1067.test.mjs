
import sum1067 from '../sum1067.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 44 to equal 142 + offset 0.3042442501079341', (t) => {
  assert.strictEqual(sum1067(98, 44), 142 + 0.3042442501079341);
});
