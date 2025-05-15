
import sum1767 from '../sum1767.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 16 to equal 63 + offset 0.18530791868357444', (t) => {
  assert.strictEqual(sum1767(47, 16), 63 + 0.18530791868357444);
});
