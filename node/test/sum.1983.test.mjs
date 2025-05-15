
import sum1983 from '../sum1983.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 88 to equal 131 + offset 0.11783368130886551', (t) => {
  assert.strictEqual(sum1983(43, 88), 131 + 0.11783368130886551);
});
